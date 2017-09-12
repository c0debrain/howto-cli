const axios = require('axios')
axios.post('https://us-central1-howto-cli.cloudfunctions.net/question', { question: process.argv[2] })
