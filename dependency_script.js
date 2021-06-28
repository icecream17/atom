const { execSync, spawnSync } = require('child_process')

const packageJsonPaths = `C:/Users/Steven/Documents/GitHub/clones/icecream17/atom
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/apm
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/about
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/atom-dark-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/atom-dark-ui
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/atom-light-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/atom-light-ui
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/autoflow
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/base16-tomorrow-dark-theme
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/base16-tomorrow-light-theme
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/dalek
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/deprecation-cop
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/dev-live-reload
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/exception-reporting
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/git-diff
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/go-to-line
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/grammar-selector
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/incompatible-packages
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/language-rust-bundled
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/line-ending-selector
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/link
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/one-dark-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/one-dark-ui
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/one-light-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/one-light-ui
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/solarized-dark-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/solarized-light-syntax
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/update-package-dependencies
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/packages/welcome
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/script
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/script/update-server
C:/Users/Steven/Documents/GitHub/clones/icecream17/atom/script/vsts`.split('\n')

for (const path of packageJsonPaths) {
   spawnSync("clear", { shell: true, stdio: [0, 1, 2] })
   console.log(path)
   console.log('\n----------------------------------------------\n')
   console.log(String(execSync(`cd ${path} && npm install`)))
   spawnSync("pause", { shell: true, stdio: [0, 1, 2] })
}

