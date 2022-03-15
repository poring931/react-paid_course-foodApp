import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CategoryItem = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const {
        idCategory,
        strCategory,
        strCategoryDescription,
        strCategoryThumb
    } = props;

  return (
     <Card className="recipe_item">
        <Link  to={`/category/${strCategory}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img className='avatar' src="/logo.svg" alt="" />
            </Avatar>
          }

          title={strCategory}
        />
        </Link>
      <CardMedia
        component="img"
        height="250"
        image={strCategoryThumb}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {strCategoryDescription.slice(0,150)}...
        </Typography>
      </CardContent>
        <Link className="see_more" to={`/category/${strCategory}`}>
          <span >
            Смотреть подробнее
          </span>
        </Link>
      

    </Card>
  )
}

export default CategoryItem