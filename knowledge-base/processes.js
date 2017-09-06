exports.keywords = ['process', 'processes']

exports.intends = [
  {
    name: 'How to show list of active processes',
    command: 'ps -a',
    patterns: '(show|see|list) (list of)? (active|open|running)? (processes|apps|applications|programs)'
  }
]
