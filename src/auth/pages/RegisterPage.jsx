import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink} from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form /*onSubmit={ onSubmit }*/ className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Tu nombre"
                fullWidth
                name="displayName"
                //value={ displayName }
                //onChange={ onInputChange }
                //error={ !!displayNameValid && formSubmmited }
                //helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                name="email"
                //value={ email }
                //onChange={ onInputChange }
                //error={ !!emailValid && formSubmmited }
                //helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                //value={ password}
                //onChange={ onInputChange }
                //error={ !!passwordValid && formSubmmited }
                //helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              
              <Grid 
                item 
                xs={ 12 }
                //display={ !!errorMessage ? '' : 'none' }
              >
                    <Alert severity="error">{/* errorMessage */}</Alert>
              </Grid>

              <Grid item xs={ 12 } >
                    <Button 
                    //disabled={ isCheckingAuthentication }
                    type="submit"
                    variant='contained' 
                    fullWidth
                    >
                        Crear cuenta
                    </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>

              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                    Ingresar
              </Link>
              
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
