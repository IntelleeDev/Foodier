import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { ListView } from './list-view'
import { Button, Segment } from '../../widgets'
import {
  Row,
  Column,
  Section } from '../../utils'

import { getPropFromBag } from '../../../stores/selectors'

const styles = {
  padding: { padding: '5px' },
  leftPad: { paddingLeft: '5px' },
  rightPad: { paddingRight: '5px' }
}

const CheckOut = ({ items, netPrice, backToShop }) => (
  <Section className='checkout'>
    <div className='content'>
      <Row className='no-gutters'>
        <Column xSmall={6}>
          <h4 style={styles.leftPad}>CHECKOUT DETAILS</h4>
        </Column>
        <Column xSmall={6}>
          <div className='right'>
            <Button
              title='back to shop'
              onClick={backToShop} />
          </div>
        </Column>
      </Row>

      <Segment
        headerColor='dark'
        title='Your shopping items'>
        <ListView
          {...{items}} />
      </Segment>

      <div className='right'>
        <span style={styles.rightPad} className='bold'>
          <i className='fa fa-usd' />{ netPrice }</span>
        <Link to='/checkout/delivery'>
          <Button
            title='proceed'
            className='info' />
        </Link>
      </div>
    </div>
  </Section>
)

const mapStateToProps = (state) => {
  return {
    netPrice: getPropFromBag(state, 'totalPrice'),
    items: getPropFromBag(state, 'items')
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    backToShop: () => history.goBack()
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckOut))
