import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../utils'

const styles = {
  padding: { padding: '5px' }
}

export const ListItem = ({ name, price, quantity, description }) => (
  <div className='list-item'>
    <Row className='no-gutter'>
      <Column xSmall={4} small={2} medium={2}>
        <img className='image-fluid' src='/images/bread.jpg' />
      </Column>
      <Column xSmall={4} small={7} medium={7}>
        <span className='bold'>{ name }</span>
      </Column>
      <Column xSmall={4} small={3} medium={3}>
        <span className='bold' style={styles.padding}>
          <i className='fa fa-usd' /> { price }
        </span>
        <span style={styles.padding}>
          { quantity }
        </span>
      </Column>
    </Row>
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string
}
