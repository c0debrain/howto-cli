exports.keywords = ['git', 'commit', 'push', 'HEAD', 'revision']

exports.command = 'git'

// Based on https://www.git-tower.com/blog/git-cheat-sheet
exports.intends = [
  // Create
  {
    name: 'clone an existing git repository',
    command: 'git clone <repository-url>',
    patterns: '(clone|copy) (existing|remote)? git? (repo|repository) (in git)?'
  },
  {
    name: 'create a new local repository in current directory',
    command: 'git init',
    patterns: '(create|init) new? git? (repo|repository) (in git)?'
  },
  {
    name: 'list files changed locally in git repository',
    command: 'git status',
    patterns: '(see|list|show) (git? changes|changed files|files changed) (in git)?'
  },
  // Local changes - TODO
  // Commit history - TODO
  // Branches & tags - TODO
  // Update & publish - TODO
  // Merge & rebase - TODO
  // Undo - TODO
  // Remotes - TODO
  {
    name: 'list remote git repositories',
    command: 'git remote -v',
    patterns: '(list|show|see) git? (remotes|remote repositories) (in git)?'
  },
  {
    name: 'add remote git repository',
    command: 'git remote add <short-name> <repository-url>',
    patterns: '(add|create) git? remote (repository|repo)? (in git)?'
  }
]
