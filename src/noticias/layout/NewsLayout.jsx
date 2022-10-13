import { Grid } from "@mui/material"
import { NavBar } from "../components/NavBar"

export const NewsLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'gray', padding: 4 }}
    >

      <Grid sx={{ display: 'inline-grid'  }}>
        
        <NavBar />
      
        { children }

      </Grid>

    </Grid>
  )
}
