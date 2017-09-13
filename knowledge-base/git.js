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
    name: 'create a new local repository in current directory in git',
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
    name: 'list changes to tracked files in git',
    command: 'git diff',
    patterns: 'git? (see|list|show) (git? diff|changes|changed files|files changed) (in? git)?'
  },
  {
    name: 'add all current changes to the next commit in git',
    command: 'git add .',
    patterns: 'git? test'
  },
  {
    name: 'in git commit all changes with comment',
    command: 'git commit -am "<comment-message>"',
    patterns: 'git? commit all? git? changes (in? git)?'
  },
  {
    name: 'in git commit previously staged changes with comment',
    command: 'git commit -m "<comment-message>"',
    patterns: 'git? commit (previously? staged)? changes? (in? git)?'
  },
  {
    name: 'change last git commit (don\'t amend pushed commits!)',
    command: 'git commit -am "<comment-message>" --amend',
    patterns: 'git? (change|update|amend) git? last? git? commit (in? git)?'
  },
  { section: 'Commit history' },
  {
    name: 'Show all commits in git starting with the newest',
    command: 'git log',
    patterns: 'git? (show|list|see) all? git? commits (in? git)? '
  },
  {
    name: 'Show changes over time for a specific file in git',
    command: 'git log -p <file>',
    patterns: 'git? (show|list|see) git? file? (history|changes) ((in|of)? file)? (in? git)?'
  },
  {
    name: 'Show who changes what and when in a specific file in git',
    command: 'git blame <file>',
    patterns: 'git? (show|list|see|blame) git? file? (changes|history) ((in|of)? file)? (in? git)?'
  },
  { section: 'Branches & tags' },
  {
    name: 'List all existing git branches',
    command: 'git branch -av',
    patterns: 'git? (show|list|see) git? all? existing? branches (in? git)?'
  },
  {
    name: 'Switch to git branch',
    command: 'git checkout <branch-name>',
    patterns: 'git? (checkout|switch to?) git? branch (in? git)?'
  },
  {
    name: 'Create new git branch based on current HEAD',
    command: 'git branch <new-branch-name>',
    patterns: 'git? (create|switch to?) new? git? branch (in? git)?'
  },
  {
    name: 'Tag the current commit in git',
    command: 'git tag <tag-name>',
    patterns: 'git? create? tag current? commit? (in? git)?'
  },
  { section: 'Update and publish' },
  {
    name: 'list remote git repositories',
    command: 'git remote -v',
    patterns: 'git? (list|show|see) git? (remote|remotes|remote repositories) (in? git)?'
  },
  {
    name: 'show information about a git remote',
    command: 'git remote show <remote>',
    patterns: 'git? (show|see) remote? (information|details)? (in? git)?'
  },
  {
    name: 'add remote git repository',
    command: 'git remote add <short-name> <repository-url>',
    patterns: 'git? (add|create) git? remote (repository|repo)? (in? git)?'
  },
  {
    name: 'download all git changes, but don\'t integrate into HEAD',
    command: 'git fetch',
    patterns: 'git? (fetch|download) all? changes (from? remote)? (in? git)?'
  },
  {
    name: 'download git changes and directly merge into HEAD',
    command: 'git pull',
    patterns: 'git? (fetch|download)? changes (in? git)?'
  },
  {
    name: 'publish local changes to default remote in git',
    command: 'git push',
    patterns: 'git? (push|send|upload)? changes (in? git)?'
  },
  { section: 'Merge and rebase' },
  {
    name: 'merge <branch> into current HEAD in git',
    command: 'git merge <branch-name>',
    patterns: 'git? (merge|integrate) git? branch (in? git)?'
  },
  {
    name: 'rebase you current HEAD onto <branch> in git',
    command: 'git rebase <branch-name>',
    patterns: 'git? rebase git? branch (in? git)?'
  },
  {
    name: 'abort git rebase',
    command: 'git rebase --abort',
    patterns: 'git? (abort|cancel) git? rebase (in? git)?'
  },
  {
    name: 'continue git rebase after resolving conflicts',
    command: 'git rebase --continue',
    patterns: 'git? (continue|renew) git? rebase (in? git)?'
  },
  { section: 'Undo' },
  {
    name: 'discard all local changes in your working directory in git',
    command: 'git reset --hard HEAD',
    patterns: 'git? (discard|reset|revert|cancel) all? git? changes (in? git)?'
  },
  {
    name: 'discard local changes in a specific file in git',
    command: 'git checkout HEAD <file-name>',
    patterns: 'git? (discard|reset|revert|cancel) git? file? changes ((in|of)? file)? (in? git)? '
  },
  {
    name: 'revert git commit (by creating a new commit with contrary changes)',
    command: 'git revert <commit>',
    patterns: 'git? (reset|revert|cancel) git? commit (in? git)?'
  }
]
