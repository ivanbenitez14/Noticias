import { NewsLayout } from "../layout/NewsLayout";
import { Cards } from "../components/Cards";
import { Box } from "@mui/system";
import { Grid, List } from "@mui/material";
import { useSelector } from "react-redux";
import { Cardd } from "../components/Cardd";


export const NewsPage = () => {

  const { notes } = useSelector( state => state.noticias )
  

  return (

    <NewsLayout >
      <Grid container>

        <Box >
          {/*<Cards />*/}

          <List>

            { notes.map( (note, index= 1) => ( <Cardd key={ index } { ...note } /> )) }
          
          </List>
          
        </Box>
        
      </Grid>

    </NewsLayout>

  )
}
