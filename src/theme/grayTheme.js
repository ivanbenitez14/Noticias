import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const grayTheme = createTheme({
    palette: {
        primary: {
            main: '#fafafa'
        },
        secondary: {
            light: '#e0e0e0',
            main: '#212121'
        },
        
        error: {
            main: red.A400
        }
    }
})