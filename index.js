#!/usr/bin/env node
const chalk = require('chalk')
const knowledgeBase = require('./knowledge-base')
const nlp = require('compromise')

const arg = process.argv.slice(2).join(' ')
const question = nlp(arg)
question.match('#Determiner').delete()

const answer = knowledgeBase(question)

if (answer) {
  console.log(chalk.green(answer.name + ': ') + chalk.blue(answer.command))
} else {
  console.log(chalk.red('Sorry, answer for this question has not been found'))
  console.log(chalk.gray('\nThis project has just started!'))
  console.log(chalk.gray('Contribute at https://github.com/ziolko/howto-cli'))
}
