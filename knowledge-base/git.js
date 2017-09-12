exports.keywords = ['git', 'commit', 'push', 'HEAD', 'revision']

exports.command = 'git'

// Based on https://www.git-tower.com/blog/git-cheat-sheet
exports.intends = [
  { section: 'Creating repository' },
  {
    name: 'clone an existing git repository',
    command: 'git clone <repository-url>',
    patterns: 'git? (clone|copy) (existing|remote)? git? (repo|repository) (in git)?'
  },
  {
    name: 'create a new local repository in current directory',
    command: 'git init',
    patterns: 'git? (create|init) new? git? (repo|repository) (in git)?'
  },
  { section: 'Local changes' },
  {
    name: 'list files changed locally in git repository',
    command: 'git status',
    patterns: 'git? (see|list|show) (git? changes|changed files|files changed) (in? git)?'
  },
  {
    name: 'list changes to tracked files',
    command: 'git diff',
    patterns: 'git? (see|list|show) (git? diff|changes|changed files|files changed) (in? git)?'
  },
  {
    name: 'add all current changes to the next commit',
    command: 'git add .',
    patterns: 'git? test'
  },
  {
    name: 'commit all changes with comment',
    command: 'git commit -am "<comment-message>"',
    patterns: 'git? commit all? git? changes (in? git)?'
  },
  {
    name: 'commit previously staged changes with comment',
    command: 'git commit -m "<comment-message>"',
    patterns: 'git? commit (previously? staged)? changes? (in? git)?'
  },
  {
    name: 'change last commit (don\'t amend pushed commits!)',
    command: 'git commit -am "<comment-message>" --amend',
    patterns: 'git? (change|update|amend) git? last? git? commit (in? git)?'
  },
  // Commit history - TODO
  // Branches & tags - TODO
  // Update & publish - TODO
  // Merge & rebase - TODO
  // Undo - TODO
  // Remotes - TODO
  { section: 'Remote repositories' },
  {
    name: 'list remote git repositories',
    command: 'git remote -v',
    patterns: 'git? (list|show|see) git? (remotes|remote repositories) (in git)?'
  },
  {
    name: 'add remote git repository',
    command: 'git remote add <short-name> <repository-url>',
    patterns: 'git? (add|create) git? remote (repository|repo)? (in git)?'
  }
]
