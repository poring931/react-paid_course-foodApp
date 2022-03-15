import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api';
import MealsList from '../components/catalog/MealsList';
import Preloader from '../components/Preloader';

const Category = () => {

    const {name} = useParams();
    const [meals, setMeals] = useState([])
    useEffect(() =>{
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    },[name])

  return (
    <>
        {
            !meals.length ? <Preloader/> : <MealsList meals={meals}/>
        }
        {
            console.log(meals)
        }
    </>
  )
}

export default Category