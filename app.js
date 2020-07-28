//Always load Node MOdules For them to utilize in Project 
//And That is Done Through Require('module name')
//const fs  = require('fs');
//const add = require('./utils.js')
const notes = require('./notes.js')
//const sum =add(4,4)
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { conflicts, demandOption } = require('yargs')


//fs.writeFileSync('notes.txt','My Name is Umer')

//WriteFileSync is used to overwrite 
//AppendFileSync to append to the file
//Require is Used for importing the file and if it is assigned to a variable that variable stores
// the value that that file is returning
//fs.appendFileSync('notes.txt',' Hello this text was Appended to the file Successfully.')
//console.log(validator.isEmail('umer@gmail.com'))
//console.log(chalk.blueBright('Umer'))
//console.log(process.argv[0])
//console.log(process.argv)
//Create add Command
yargs.command({
    command : 'add',
    describe: 'Add a new note ',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Text',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title,argv.body) 
    } 


})
//Create Remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note ',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    } 

})
//Create List command
yargs.command({
    command : 'List',
    describe: 'List a note ',
    handler(){
        notes.listNotes()
    }

})
//Create Read command
yargs.command({
    command : 'Read',
    describe: 'Read a note ',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }

})
yargs.parse()
