# Master your command line

Despite years of experience I have problem to remember all the Unix black magic. I use `git` on daily basis and still strugle with more advanced commands. Introducing `docker` made my experience with terminal even worse.

`howto-cli` comes to the rescue. Ask a technical question directly in your terminal and get an answer immediately.

![howto-cli demo](https://raw.githubusercontent.com/ziolko/howto-cli/master/docs/animation.gif)


# Installation and usage
`npm i -g howto-cli`

You should now have access to the command `howto`. For the start try a few simple questions:
- `howto reset changes`
- `howto branch` (shows all commands with word `branch`)
- `howto git` (shows all `git` commands)

# Current status
This project is currently in the proof-of-concept phase. I focus on `git` to check if I am able to cover useful basic and mid-level commands. Feel free to suggest questions that should be covered by this tool.

Starring project [github repository](https://github.com/ziolko/howto-cli) will give me a strong incentive to work further :wink:

# Analytics
At the current stage usage statistics are crucial. That's why every time this tool is used your question is anonymously sent to the backend server. Based on the questions asked the knowledge base will be improved.

Without anonymous usage analytics I am unable to improve the tool. If you are concerned about privacy let me know in [this issue](https://github.com/ziolko/howto-cli/issues/1).

# Credits
NodeJS packages used in this project:
* axios
* chalk
* compromise
* conf
* figures
* fuse.js
* meow
* pegjs
* semver

# License 
[GPL-3.0](https://opensource.org/licenses/GPL-3.0)