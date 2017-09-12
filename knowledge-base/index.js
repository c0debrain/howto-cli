const fs = require('fs')
const Fuse = require('fuse.js')
const sentenceTester = require('../sentence-tester')

function getKnowledgeBase () {
  const filesInCurrentDir = fs.readdirSync(__dirname)
  const jsFilesToRequire = filesInCurrentDir.filter(file => file.match(/\.js$/) && file !== 'index.js')
  return jsFilesToRequire.map(file => require('./' + file))
}

function getFlatKnowledgeBase () {
  const result = []
  getKnowledgeBase().forEach(base => result.push(...base.intends))
  return result
}

function getKnowledgeBaseSortedByRelevance (knowledgeBase, sentence) {
  const knowledgeBaseWithRelevance = knowledgeBase.map(data => {
    const commandRelevance = (data.command && sentence.has(data.commnand)) ? 5 : 0

    const keywords = data.keywords || []
    const keywordRelevance = keywords.reduce((acc, keyword) => sentence.has(keyword) ? acc + 1 : acc, 0)

    return Object.assign({}, data, { relevance: commandRelevance + keywordRelevance })
  })
  return knowledgeBaseWithRelevance.sort((a, b) => b.relevance - a.relevance)
}

function findMatchingResponses (knowledgeBase, sentence) {
  const result = []
  for (const knowledge of knowledgeBase) {
    const intends = knowledge.intends || []

    const responses = intends.filter(intend => {
      if (!intend.patterns) return false
      const patterns = Array.isArray(intend.patterns) ? intend.patterns : [intend.patterns]
      return patterns.find(pattern => sentenceTester(sentence, pattern))
    })

    result.push(...responses)
  }
  return result
}

exports.answer = function (sentence) {
  const knowledgeBase = getKnowledgeBase()
  const knowledgeBaseSorted = getKnowledgeBaseSortedByRelevance(knowledgeBase, sentence)

  return findMatchingResponses(knowledgeBaseSorted, sentence)
}

exports.command = function (sentence) {
  const command = sentence.out().trim()
  const result = getKnowledgeBase().find(value => value.command === command)
  return result && result.intends
}

exports.fuzzy = function (sentence) {
  const flatKnowledgeBase = getFlatKnowledgeBase()

  const options = {
    tokenize: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name', 'command', 'pattern']
  }

  const fuse = new Fuse(flatKnowledgeBase, options)
  const result = fuse.search(sentence.out())
  result.length = Math.min(5, result.length)
  return result
}
