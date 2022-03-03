import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api'
import CategoryList from '../components/catalog/CategoryList'
import Preloader from '../components/Preloader'

const Home = () => {

  const [catalog, setCatalog] = useState([])

  useEffect(()=>{
    getAllCategories().then((data) =>{
      setCatalog(data.categories)
    })
  },[])

  {console.log(catalog)}
  return (
    <main className='main_part'>
      { 
      !catalog.length ? 
          <Preloader/> :
          (
            <CategoryList catalog={catalog}/>
          )
      }
    </main>
  )
}

export default Home