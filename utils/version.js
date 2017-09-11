const axios = require('axios')
const semver = require('semver')

const figures = require('figures')
const chalk = require('chalk')

module.exports = function checkNewVersion () {
  axios.get('https://api.npms.io/v2/package/howto-cli').then(response => {
    if (response.status !== 200 || !response.data || !response.data.collected || !response.data.collected.metadata) {
      return response
    }

    const manifest = require('./package.json')
    if (semver.gt(response.data.collected.metadata.version, manifest.version)) {
      console.log(chalk`{yellow ${figures.info}} Newer version of {green howto-cli} available! Update with {gray npm i -g howto-cli}`)
    }
  }).then(null, console.debug)
}
