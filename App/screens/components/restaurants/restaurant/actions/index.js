import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../../utils'

const Actions = ({ deliveryTime }) => (
  <div className='actions'>
    <Row>
      <Column xSmall={6}>
        <i className='text-color-primary fa fa-clock-o' />
        <span className='tiny bold'> { deliveryTime } mins</span>
      </Column>
    </Row>
  </div>
)

Actions.propTypes = {
  deliveryTime: PropTypes.string
}

export default Actions
