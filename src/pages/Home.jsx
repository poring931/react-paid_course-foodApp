import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../api'
import CategoryList from '../components/catalog/CategoryList'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const Home = () => {

  const [catalog, setCatalog] = useState([])
   const [filteredCatalog, setFilteredCatalog] = useState([]);
const { push } = useNavigate();
    const { pathname, search } = useLocation();
  useEffect(()=>{
    getAllCategories().then((data) =>{
      setCatalog(data.categories)
    })
  },[])
    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        push({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);
  return (
    <main className='main_part'>
     <Search cb={handleSearch} />
     {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
    </main>
  )
}

export default Home