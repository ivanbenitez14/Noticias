import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { MenuList } from './MenuList';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useFetchClima } from '../../hooks/useFetchClima';



export const NavBar = () => {

    //FETCH A LA API DE LOS VALORES DEL DOLAR
    const { data, isLoading, hasError } = useFetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
    
    //DESESTRUCTURACION DE DOLAR OFICIAL
    const { compra:compraOfi, venta:ventaOfi } = !!data && data[0].casa;
    //DESESTRUCTURACION DE DOLAR BLUE
    const { compra:compraBlue, venta:ventaBlue } = !!data && data[1].casa;




    //FETCH A LA API DEL CLIMA
    const { data:tiempo, isLoading:cargando, hasError:errores } = useFetchClima

    //DESESTRUCTURACION DE TEMPERATURA ACTUAL (API CLIMA)
    const { temp } = !!tiempo && tiempo.main;




    //NAVIGATE
    const navigate = useNavigate();

    // SE ASIGNA LA RUTA AL BOTON QUE CONTIENE EL LOGO DE EMPRESA
    const onLogoClick = () => {
      return navigate('/');
    }

    // SE ASIGNA LA RUTA AL BOTON DE INGRESO
    const onIngresarCLick = () => {
        return navigate('/auth');
    }

  return (
 
        <AppBar position='fixed' >
            
            <Toolbar >

                <MenuList />

                <Button onClick={ onLogoClick }  color="inherit" sx={{ flexGrow: 1, textAlign: "center"}}><img src="src\imagenes\NoticiasOnline3.png" height ="50" width="600" /></Button>

                <Button variant="outlined" onClick={ onIngresarCLick }  color="inherit">Ingresar</Button>

            </Toolbar>


            <Box sx={{ display: 'inline-flex' }} >
                
                <Box sx={{ display: 'flex', flexDirection: 'row', height: 30, width: '25%', backgroundColor: '#e0e0e0' }}>
                    Dolar Oficial | { compraOfi } / { ventaOfi }
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', height: 30, width: '25%', backgroundColor: '#e0e0e0' }}>
                    Dolar Blue | { compraBlue } / { ventaBlue }
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', height: 30, width: '25%', backgroundColor: '#e0e0e0' }}>
                    { temp }° Capital Federal
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', height: 30, width: '25%', backgroundColor: '#e0e0e0' }}>
                    Recibi nuestros Newsletters
                </Box>
            
                
            </Box>


        </AppBar>

  )
}
