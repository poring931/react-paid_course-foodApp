import React from 'react'
import Meal from './Meal'

const MealsList = ({meals}) => {
  return (
    <div className='cat_list'>
        {
            meals.map(meal => (
                <Meal key={meal.idMeal} {...meal}/>
            ))
        }
    </div>
  )
}

export default MealsList