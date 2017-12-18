import React from 'react'

const FoodCardContainer = ({ children, onClick }) => (
  <div
    className='food-card'
    onClick={() => onClick()}>
    {children}
  </div>
)

export default FoodCardContainer
