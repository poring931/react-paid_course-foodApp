import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Meal from './Meal'

const MealsList = ({meals}) => {
    const navigate = useNavigate();

  return (
    <>
              <Button variant="contained" sx={{ mb: 3,mt: 3 }} onClick={() => navigate(-1)}>    
       go back
    </Button>
       <div className='cat_list'>

        {
            meals.map(meal => (
                <Meal key={meal.idMeal} {...meal}/>
            ))
        }
    </div>
    </>
  )
}

export default MealsList