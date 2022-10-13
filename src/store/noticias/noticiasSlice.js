import { createSlice } from '@reduxjs/toolkit';


export const noticiasSlice = createSlice({
    name: 'noticias',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        activeForEdition: true,
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            //state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNote: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state, action ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action ) => { // payload: note
            state.isSaving = false;
            state.notes.push( action.payload );
            state.activeForEdition = false;
        },
        updateSelectedNote: ( state ) => {
            state.activeForEdition = true;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        deleteNote: ( state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNote, 
    setSaving, 
    updateNote,
    updateSelectedNote, 
    deleteNote, 
    savingNewNote, 
    setPhotosToActiveNote 
} = noticiasSlice.actions;
