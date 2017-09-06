#!/usr/bin/env node
const axios = require('axios')
const chalk = require('chalk')
const semver = require('semver')
const knowledgeBase = require('./knowledge-base')
const nlp = require('compromise')

const arg = process.argv.slice(2).join(' ')

sendStatistics(arg)

const question = nlp(arg)
question.match('#Determiner').delete()
const answer = knowledgeBase(question)

if (answer) {
  console.log(chalk`{green [Success]} ${answer.name}: {gray ${answer.command}}`)
} else {
  console.log(chalk`{yellow [Info]} Sorry, answer for this question has not been found`)
  console.log(chalk`\n{yellow [Info]} This project has just started! Contribute at {blue https://github.com/ziolko/howto-cli}`)

  checkNewVersion()
}

function sendStatistics () {
  axios.post('https://us-central1-howto-cli.cloudfunctions.net/question', { question: arg })
}

function checkNewVersion () {
  axios.get('https://api.npms.io/v2/package/howto-cli').then(response => {
    if (response.status !== 200 || !response.data || !response.data.collected || !response.data.collected.metadata) {
      return response
    }

    const manifest = require('./package.json')
    if (semver.gt(response.data.collected.metadata.version, manifest.version)) {
      console.log(chalk`{yellow [Info]} Newer version of {green howto-cli} available! Update with {gray npm i -g howto-cli}`)
    }
  }).then(null, console.debug)
}
