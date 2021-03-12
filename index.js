const remoteGitTags = require('remote-git-tags')

if (process.argv.length <= 2) {
  console.log('Usage: remote-git-tags REMOTE_URL')
  process.exit(0)
}

;(async () => {
  const result = await remoteGitTags(process.argv[2])
  console.log(result)
})()
