import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({catalog =[]}) => {
  return (
    <div className='cat_list'>
        {catalog.map(catItem =>(
            <CategoryItem  key={catItem.idCategory} {...catItem} />
        ))}

    </div>
  )
}

export default CategoryList