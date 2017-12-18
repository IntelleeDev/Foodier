import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../../../utils'
import { IconButton } from '../../../../../widgets'

const styles = {
  padding: {
    padding: '10px 0px 0px 0px'
  }
}

export const Item = ({ name, quantity, imageUrl, removeItem }) => (
  <Row className='left'>
    <Column xSmall={2} small={2}>
      <img src={`/images/burger.jpg`} className='fluid-image' />
    </Column>
    <Column xSmall={8} small={8}>
      <Row className='no-gutter'>
        <Column xSmall={12} small={12}>
          <span className='bold small-font text-black'>{ name }</span>
        </Column>
        <Column xSmall={12} small={12}>
          <span className='bold small-font info'>
            { (quantity > 1) ? `${quantity} pieces` : `${quantity} piece` }
          </span>
        </Column>
      </Row>
    </Column>
    <Column xSmall={2} small={2}>
      <div style={styles.padding}>
        <IconButton
          icon={<i className='fa fa-close' />}
          className='primary'
          onClick={removeItem} />
      </div>
    </Column>
  </Row>
)

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  removeItem: PropTypes.func
}
