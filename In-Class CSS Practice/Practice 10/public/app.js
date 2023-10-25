const yargs = require('yargs');
const notes = require('./notes.js');
const chalk = require('chalk');
const msg = notes.getNotes();
const command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log(`Title: ${argv.title}`  ),
        //console.log(`${argv.body}`)
        notes.addNote(argv.title, argv.body)
    }
})
console.log(yargs.argv)

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Removing a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Listing all notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse();