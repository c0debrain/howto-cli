const fs = require('fs')
const sentenceTester = require('../sentence-tester')

function getKnowledgeBase () {
  const filesInCurrentDir = fs.readdirSync(__dirname)
  const jsFilesToRequire = filesInCurrentDir.filter(file => file.match(/\.js$/) && file !== 'index.js')
  return jsFilesToRequire.map(file => require('./' + file))
}

function getKnowledgeBaseSortedByRelevance (knowledgeBase, sentence) {
  const knowledgeBaseWithRelevance = knowledgeBase.map(data => {
    const keywords = data.keywords || []
    const relevance = keywords.reduce((acc, keyword) => sentence.has(keyword) ? acc + 1 : acc, 0)
    return Object.assign({}, data, { relevance })
  })
  return knowledgeBaseWithRelevance.sort((a, b) => b.relevance - a.relevance)
}

function findMatchingResponse (knowledgeBase, sentence) {
  for (const knowledge of knowledgeBase) {
    const intends = knowledge.intends || []

    const response = intends.find(intend => {
      const patterns = Array.isArray(intend.patterns) ? intend.patterns : [intend.patterns]
      return patterns.find(pattern => sentenceTester(sentence, pattern))
    })

    if (response) return response
  }
}

module.exports = function (sentence) {
  const knowledgeBase = getKnowledgeBase()
  const knowledgeBaseSorted = getKnowledgeBaseSortedByRelevance(knowledgeBase, sentence)

  return findMatchingResponse(knowledgeBaseSorted, sentence)
}
