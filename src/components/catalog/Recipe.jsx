import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../../api'

const Recipe = () => {

    const [recipe, setRecipe] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getMealById(id).then((data) =>setRecipe(data.meal[0]))
    })

  return (
    <div>
        
    </div>
  )
}

export default Recipe