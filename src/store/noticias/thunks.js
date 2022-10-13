import { addNewEmptyNote, deleteNote, savingNewNote, setActiveNote, setSaving, updateNote, updateSelectedNote } from "./noticiasSlice";


export const startNewNote = () => {
    return ( dispatch ) => {
        dispatch( updateSelectedNote());
        dispatch( savingNewNote() );

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }


        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startSaveNote = () => {
    return ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { active:note } = getState().noticias;

        dispatch( updateNote( note ) );

    }
}

export const startUpdateNote = () => {
    return (dispatch, getState) => {
        const { active:note } = getState().noticias;  //MANDARLE EL ID
        dispatch( updateSelectedNote(note) );
    }
}

export const startDeleteNote = () => {
    return ( dispatch, getState ) => {
        const { active:note } = getState().noticias;    //MANDARLE EL ID
        dispatch( deleteNote(note) );
    }
}