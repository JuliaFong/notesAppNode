const chalk = require('chalk')
const yargs = require('yargs')


//Customize yargs version
yargs.version('1.1.0')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function() {
        console.log('Removing the note!!!')
    }
})

// Create read command

yargs.command({
    command:'read',
    describe: 'Read note',
    handler: function() {
        console.log('I am reading the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'note list',
    handler: function() {
        console.log('Here is a list')
    }
})

// Create list command

//add, remove, read, list

console.log(yargs.argv)