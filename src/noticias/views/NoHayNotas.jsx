import { Grid, List } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateNote } from "../../store/noticias/thunks";
import { Cardd } from "../components/Cardd";


export const NoHayNotas = () => {

  const { active:note, notes } = useSelector( state => state.noticias )
  const dispatch = useDispatch();

  const onUpdateSelectedNote = () => {
    dispatch( startUpdateNote(note) );
  }

  return (

    <>
      <Grid container >
                  
        <Box sx={{ display: 'flex', flexDirection: 'row', height: 100, width: '100%', backgroundColor: '#e0e0e0' }}>
            asdasd
        </Box>

        <List onClick={onUpdateSelectedNote} >
          
          { notes.map( (note, index= 1) => ( <Cardd  key={ index } { ...note } /> )) }

        </List>
      
      </Grid>

      {/* DEBAJO VAN LAS NOTAS YA CREADAS PARA SU POSTERIOR EDICION */}
      


    </>
  )
}
