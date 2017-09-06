const fs = require('fs')
const path = require('path')
const peg = require('pegjs')
const grammar = fs.readFileSync(path.join(__dirname, 'grammar.peg'), { encoding: 'utf-8' })

const parser = peg.generate(grammar)

class Tester {
  constructor (patternText) {
    this.pattern = parser.parse(patternText)
  }

  test (sentence) {
    this.currentTermIndex = 0
    this.terms = sentence.terms().list

    return this.testNode(this.pattern) && this.currentTermIndex === this.terms.length
  }

  testNode (node) {
    switch (node.type) {
      case 'word-list': return this.testWordList(node)
      case 'or': return this.testOrExpression(node)
      case 'expression': return this.testSimpleExpression(node)
      case 'word': return this.testWord(node)
    }

    throw new Error('Unknown node type: ' + node.type)
  }

  testWordList (node) {
    for (const subNode of node.value) {
      if (!this.testNode(subNode)) {
        return false
      }
    }

    return true
  }

  testOrExpression (node) {
    const startingIndex = this.currentTermIndex
    for (const option of node.value) {
      this.currentTermIndex = startingIndex
      if (this.testNode(option)) {
        return true
      }
    }
    return false
  }

  testSimpleExpression (node) {
    const startingIndex = this.currentTermIndex
    const value = this.testNode(node.value)

    if (value && node.optional) {
      return true
    }

    if (value && node.negation) {
      return false
    }

    if (!value && node.optional) {
      this.currentTermIndex = startingIndex
      return true
    }

    if (!value && node.negation) {
      return true
    }
  }

  testWord (node) {
    const word = this.terms[this.currentTermIndex++]
    return word && word.out('text').trim() === node.value
  }
}

module.exports = (sentence, patternText) => {
  const tester = new Tester(patternText)
  return tester.test(sentence)
}
