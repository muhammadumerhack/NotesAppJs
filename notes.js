
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) =>{
        const notes = loadNotes()
        const duplicateNote = notes.find((note)=> note.title === title)
        // const duplicateNotes =notes.filter(function(note){
        //         return note.title == title
        // })
        
        if(!duplicateNote ){
            notes.push(
                {
                    title:title,
                    body:body
                }
            )
            saveNotes(notes)
            console.log('Notes saved successfully')
        }else{
            console.log('Notes Title already present')
        }
        
           
}
const saveNotes = (notes) =>{
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonData)

}
const loadNotes = () =>{
    try {
        const dataJson = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }
    
}
const removeNotes = (title) =>{
        var notes = loadNotes()
        const notesToKeep= notes.filter((note) => note.title !== title )
          
        // const notesToKeep= notes.filter(function(note){
        //     return  note.title !== title 
        // })
        if(notes.length > notesToKeep.length){
            
            console.log(chalk.green.bold.inverse('Notes removed successfully'))
            saveNotes(notesToKeep)
        }else{    
            console.log(chalk.red.bold.inverse('Title not found'))
        }
        
}
const listNotes =() =>{
    const notes = loadNotes()
        console.log(chalk.inverse('Your Notes'))
            notes.forEach((note) => {
                console.log(note.title)
            });
    }
const readNotes = (title) =>{
    const notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)
    if(requiredNote){
            console.log(chalk.bold.blackBright(chalk.bgWhiteBright(requiredNote.title)))
            console.log('------------------------------------')
            console.log(requiredNote.body)
        }else{
        console.log(chalk.red.inverse(chalk.bgBlackBright('Err! Note Not Found')))
    }
}
module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes,
};