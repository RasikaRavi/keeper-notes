import React, { useState } from 'react';
import Display from './Display';
import Header from "./Header";

function Notes(){
    const [notes, setNotes] = useState({
        title: '',
        content: ''
      })
    const [Note, updateNote] = React.useState([]);
    
    const handleChange = event => {
        setNotes({...notes,[event.target.name]:event.target.value}) 
     }

     const handleSubmit= event=>{
        event.preventDefault()
        Note.push({
            newTitle: notes.title,
            newContent:notes.content
          })
          updateNote([...Note])
        console.log(Note)
    }

    return(
        <React.Fragment>
         <Header/>
        <input size='40' type="text" name='title' placeholder='Title' onChange={handleChange}/><br/>
        <input className="input-box" type="text" name='content' placeholder='Take a note..' onChange={handleChange}/><br/>
        <button className="add-btn" onClick={handleSubmit}>Add</button>
        <Display note={Note} updatenote={updateNote}/>
        
        </React.Fragment>
    )

}
 export default Notes