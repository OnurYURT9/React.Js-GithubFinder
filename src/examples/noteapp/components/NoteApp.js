import React,{useEffect, useReducer}  from 'react'
import notesReducer from '../reducers/notes'
import NotList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])
  

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData) {
            dispatch({type: 'POPULATE_NOTES', notes: notesData})
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    
    

    return (
        <NoteContext.Provider value={{notes,dispatch}}>
              <div className="container p-5">
            <div className="card mb-3">
                <div className="card-header">Notes</div>
                {
                    notes && (
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                {
                                 <NotList />
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            <div className="card mb-3">
                <div className="card-header">Add a New Note</div>
                <div className="card-body">
                   <AddNoteForm  />
                </div>
            </div>
        </div>  
        </NoteContext.Provider>
      
    ) 
}

export default NoteApp