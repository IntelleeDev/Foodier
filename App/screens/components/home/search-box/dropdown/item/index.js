import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column } from '../../../../../utils'

const Item = ({ id, name, cityName, onItemSelected }) => (
  <li onClick={() => onItemSelected()}>
    <Row>
      <Column xSmall={1} small={1}>
        <div className='centerfy' style={{ padding: '13px 0px' }}>
          <i className='fa fa-map-pin' />
        </div>
      </Column>
      <Column xSmall={11} small={11}>
        <div className='padded-5-tb black-t bold'><span>{ name }</span></div>
        <span>{ cityName }</span>
      </Column>
    </Row>
  </li>
)

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  cityName: PropTypes.string,
  onItemSelected: PropTypes.func
}

export default Item
