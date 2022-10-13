import { Link as RouterLink} from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const AuthPage = () => {

  return (
    <AuthLayout title="Login">
      <form /*onSubmit={ onSubmit }*/ className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              //value={ email }
              //onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              //value={ password }
              //onChange={ onInputChange }
            />
          </Grid>

          <Grid 
            item 
            xs={ 12 }
            //display={ !!errorMessage ? '' : 'none' }
          >
            <Alert severity="error">{/* errorMessage */}</Alert>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                //disabled={ isAuthenticating }
                type="submit" 
                variant='contained' 
                fullWidth 
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                //disabled={ isAuthenticating }
                variant='contained' 
                fullWidth
                //onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link 
              //disabled={ isAuthenticating }
              component={ RouterLink } 
              color='inherit' 
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
