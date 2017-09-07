exports.keywords = ['git', 'git', 'git', 'commit', 'push', 'HEAD', 'revision']

// Based on https://www.git-tower.com/blog/git-cheat-sheet
exports.intends = [
  // Create
  {
    name: 'How to clone an existing git repository',
    command: 'git clone <repository-url>',
    patterns: '(clone|copy) (existing|remote)? git? (repo|repository) (in git)?'
  },
  {
    name: 'How to create a new local repository in current directory',
    command: 'git init',
    patterns: '(create|init) new? git? (repo|repository) (in git)?'
  },
  {
    name: 'How to list files changed locally in git repository',
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
    name: 'How to list remote git repositories',
    command: 'git remote -v',
    patterns: '(list|show|see) git? (remotes|remote repositories) (in git)?'
  },
  {
    name: 'How to add remote git repository',
    command: 'git remote add <short-name> <repository-url>',
    patterns: '(add|create) git? remote (repository|repo)? (in git)?'
  }
]
