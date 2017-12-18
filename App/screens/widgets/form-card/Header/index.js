import React from 'react'
import PropTypes from 'proptypes'

import { Row, Column, GridContainer } from '../../../utils'

const Header = ({ title, closeForm }) => (
  <GridContainer>
    <Row>
      <Column xSmall={12} small={12}>
        <header className='centerfy' onClick={closeForm}>
          <h2>{ title }</h2>
        </header>
      </Column>
    </Row>
  </GridContainer>
)

Header.propTypes = {
  closeForm: PropTypes.func.isRequired
}

export default Header

// <div className='right close-button' onClick={() => window.alert('smiggle')}>
// <i className='fa fa-close' />
// </div>
