const os = require('os')

console.log('Operating System: ', os.platform())

console.log('Architecture: ', os.arch())

console.log('Processors: ', os.cpus())

console.log('Free memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Home dir: ', os.homedir())

console.log('On: ', os.uptime())