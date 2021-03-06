exports.keywords = ['file', 'directory', 'folder', 'dir']

exports.intends = [
  {
    name: 'remove single file',
    command: 'rm <file-name>',
    patterns: '(remove|delete|del) (single)? file',
    tests: ['remove single file', 'remove file', 'delete file', 'delete single file', 'del file']
  },
  {
    name: 'remove directory recursively',
    command: 'rm -r <directory-name>',
    patterns: '(recursively)? (remove|delete|del) (recursively)? (directory|dir|folder) (recursively)?',
    tests: ['remove dir recursively', 'del directory', 'remove dir', 'delete recursively folder', 'remove folder']
  },
  {
    name: 'create an empty file',
    command: 'touch <file-name>',
    patterns: '(create|make|touch) (new)? file'
  },
  {
    name: 'create an empty directory',
    command: 'mkdir <directory-name>',
    patterns: '(create|make) (new)? (directory|dir|folder)'
  },
  {
    name: 'print file content',
    command: 'cat <file-name>',
    patterns: '(print|show) file content'
  },
  {
    name: 'list files in current directory',
    command: 'ls',
    patterns: [
      '(list|show|see) files',
      '(show|list|see) (list of)? (files|content) (of|in)? (current|active)? (directory|folder|dir)'
    ]
  },
  {
    name: 'show detailed information about content of current directory',
    command: 'ls -la',
    patterns: '(list|show|see) (file|files) (metadata|info|details|owner|permissions|group|author) name?'
  }
]
