import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const value = useParams()


  return (
    <div>
        Movie
        {console.log(value)}
    </div>
  )
}

export default Movie