import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Bag } from './bag'
import { BagIcon } from './bag-icon'
import { Section } from '../../utils'
import { toggleVisibility, removeFromShoppingBag } from '../../../stores/actions'
import { getVisibility, getPropFromBag } from '../../../stores/selectors'

const ShoppingBag = ({
  items,
  showBag,
  subTotal,
  removeItem,
  toCheckOut,
  toggleBagVisibility }) => (
    <Section className='shop-bag-box'>
      <BagIcon
        itemCount={items.length}
        onClick={toggleBagVisibility} />
      {showBag &&
        <Bag {...{
          subTotal,
          items,
          removeItem,
          toCheckOut}} />
        }
    </Section>
)

const mapStateToProps = (state) => {
  return {
    items: getPropFromBag(state, 'items'),
    showBag: getVisibility(state, 'shoppingBag'),
    subTotal: getPropFromBag(state, 'totalPrice')
  }
}

const mapDisptachToProps = (dispatch, {history}) => {
  return {
    toCheckOut: () => {
      history.push('/checkout')
      dispatch(toggleVisibility({ type: 'shoppingBag' }))
    },
    removeItem: (id) => {
      dispatch(removeFromShoppingBag({id: id}))
      dispatch(toggleVisibility({ type: 'shoppingBag' }))
    },
    toggleBagVisibility: () => dispatch(toggleVisibility({ type: 'shoppingBag' }))
  }
}

ShoppingBag.propTypes = {
  items: PropTypes.array,
  showBag: PropTypes.bool
}

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(ShoppingBag))
