const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');


//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
      notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.removeNote(argv.title)
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

yargs.parse()