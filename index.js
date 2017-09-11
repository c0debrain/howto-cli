#!/usr/bin/env node

const childProcess = require('child_process')
const figures = require('figures')
const chalk = require('chalk')
const nlp = require('compromise')
const meow = require('meow')

const knowledgeBase = require('./knowledge-base')
const checkNewVersion = require('./utils/version')

const cli = meow(chalk`
Usage
  $ howto <question>
  $ howto <command-name>

Options
  -h, --help  Show help message

Examples
  {grey $} howto show active processes
  {grey $} howto remove directory recursively
  {grey $} howto git
`)

const arg = cli.input.join(' ').trim()

if (!arg) {
  console.log(cli.help)
} else {
  childProcess.spawn(process.execPath, ['utils/analytics.js', arg], { detached: true, stdio: 'ignore' }).unref()

  const question = nlp(arg)
  question.match('#Determiner').delete()

  const command = knowledgeBase.command(question)
  const answer = knowledgeBase.answer(question)
  const fuzzyAnswer = knowledgeBase.fuzzy(question)

  if (command) {
    console.log(chalk`{green ${figures.tick}} Showing all receipes for command {green ${question.out()}}\n`)
    command.forEach(answer => console.log(chalk`{green ${figures.bullet}} ${answer.command} {gray - ${answer.name}}`))
  } else if (answer.length > 0) {
    answer.forEach(answer => console.log(chalk`{green ${figures.tick}} ${answer.command} {gray - ${answer.name}}`))
  } else if (fuzzyAnswer.length > 0) {
    console.log(fuzzyAnswer.length)
    console.log(chalk`{red ${figures.cross}} No exact answer has been found. Find below the closest matches:`)
    fuzzyAnswer.forEach(answer => console.log(chalk`{green ${figures.bullet}} ${answer.command} {gray - ${answer.name}}`))
  } else {
    console.log(chalk`{red ${figures.cross}} Answer for your question has not been found. Add it at {blue https://github.com/ziolko/howto-cli}`)
    checkNewVersion()
  }
}
