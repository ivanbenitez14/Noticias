import { Grid, IconButton, List } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { NoteViews } from "../views/NoteViews";
import { startNewNote } from "../../store/noticias/thunks";
import { NoHayNotas } from "../views/NoHayNotas";
import { NewsLayout } from "../layout/NewsLayout";


export const NotesPage = () => {

  const { isSaving, active, activeForEdition } = useSelector( state => state.noticias );
  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch( startNewNote() );
  }


  return (
    <NewsLayout>

      {
        ( !!active && activeForEdition )
        ? <NoteViews /> 
        : <NoHayNotas /> 
      }
      
      <Grid
        container
        direction="column"
      >


        <IconButton
          onClick={ onNewNote }
          size='large'
          disabled= { isSaving }
          sx={{
            color: 'white',
            backgroundColor: '#03a9f4',
            ':hover': { backgroundColor: '#0288d1', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>



      </Grid>

    </NewsLayout>
  )
}
