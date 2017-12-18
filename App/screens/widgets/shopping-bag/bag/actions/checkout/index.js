import React from 'react'
import PropTypes from 'proptypes'
import { Button } from '../../../../../widgets'

export const CheckOut = ({ toCheckOut, itemCount }) => (
  <div>
    <Button
      title='checkout'
      className='fluid info'
      onClick={toCheckOut}
      isDisabled={itemCount === 0} />
  </div>
)

CheckOut.propTypes = {
  toCheckOut: PropTypes.func.isRequired
}
