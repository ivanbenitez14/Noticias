import { DeleteOutline, SaveOutlined} from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/noticias/noticiasSlice";
import { startDeleteNote, startSaveNote } from "../../store/noticias/thunks";
import { NoHayNotas } from "./NoHayNotas";



export const NoteViews = () => {

    const dispatch = useDispatch();

    const { active:note, isSaving } = useSelector( state => state.noticias );

    const { title, body, date, formState, onInputChange } = useForm( note );

    const navigate = useNavigate();

    //FORMATO DE FECHA
    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toLocaleDateString();
    }, [date])

    //GUARDAR NOTAS O CAMBIOS
    const onGuardarCambios = () => {
        dispatch( startSaveNote() );
        navigate('/');
    }

    //BORRAR NOTAS
    const onBorrarCambios = () => {
        dispatch( startDeleteNote() );
        navigate('/');
    }

    //FORMULARIO
    useEffect(() => {
        dispatch( setActiveNote(formState) )
    }, [formState])

    

  return (
    <Grid container maxWidth>

        <Grid item>
            <Typography fontSize={ 20 } fontWeight='light' >{dateString}</Typography>
        </Grid>

        
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio hoy?"
                minRows={ 5 }
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        
        <Grid container spacing={2}>

            <Grid item xs={8} >

                <Button
                    sx={{ mt: 2 }}
                    color="error"
                    onClick={ onBorrarCambios }
                >
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid>
        
            <Grid item xs={4} container justifyContent='end'>
                
                <Button
                    disabled= { isSaving }
                    color="secondary" 
                    sx={{ padding: 2 }}
                    onClick= { onGuardarCambios }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>

            </Grid>
            
        </Grid>

    </Grid>
  )
}
