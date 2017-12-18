import React from 'react'
import PropTypes from 'proptypes'

const FindAreas = ({ searchAreas, resetDropdown, selectedArea }) => {
  let inputField = null
  return (
    <input
      ref={(input) => {
        inputField = input
        if (selectedArea && inputField) {
          inputField.value = selectedArea
        }
      }}
      onClick={() => resetDropdown()}
      className='search-input fluid bold'
      placeholder='Enter your location'
      onChange={() => searchAreas(inputField.value.trim())} />
  )
}

FindAreas.propTypes = {
  searchAreas: PropTypes.func.isRequired,
  resetDropdown: PropTypes.func.isRequired
}

export default FindAreas
