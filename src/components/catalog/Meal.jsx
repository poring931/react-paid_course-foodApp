import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Meal = (props) => {

    const { strMeal, idMeal, strMealThumb} = props;

  return (
    <Card className="recipe_item">

        <Link to={`/meal/${idMeal}`}>
            <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            <img className='avatar' src="/logo.svg" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={strMeal}
      />
        </Link>

      <CardMedia
        component="img"
        height="250"
        image={strMealThumb}
        alt="Paella dish"
      />
 
     
        <Link className="see_more" to={`/meal/${idMeal}`}>
          <span >
            Watch recipe
          </span>
        </Link>
      

    </Card>
  )
}

export default Meal