import React from 'react'
import './CategoryItem.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='category-body-container'>
        <h2>{title.toUpperCase()}</h2>
        <span>Shop Now</span>
      </div>
    </div>
  )
}

export default CategoryItem
