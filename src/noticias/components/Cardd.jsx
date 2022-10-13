import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { setActiveNote } from '../../store/noticias/noticiasSlice';
import { useDispatch } from 'react-redux';

export const Cardd = ({ title = '', body, date, id, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const isActive = () => {
        dispatch( setActiveNote({ title, body, date }) );
    }
    

  return (
    <Card sx={{ maxWidth: 345 }}>

        <CardActionArea onClick= { isActive }>

            <CardMedia
                component="img"
                height="140"
                image="src\imagenes\Iguana.jpg"
                alt="green iguana"
            />
            
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>

            </CardContent>

        </CardActionArea>

    </Card>
  )
}
