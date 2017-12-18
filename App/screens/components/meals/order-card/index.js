import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux'

import Image from './image'
import Header from './header'
import Content from './content'
import Actions from './actions'

import * as actions from '../../../../stores/actions'

const OrderCard = ({
  meal,
  onClose,
  addToBag,
  quantity,
  totalPrice,
  onIncrement,
  onDecrement }) => (

    <div className='faded-segment'>
      <div className='order-card'>
        <Header {...{onClose}} />
        <Image src='/images/egusii.jpg' alt='' />

        <Content
          name={meal.name}
          description={meal.description} />

        <Actions
          {...{
            meal,
            addToBag,
            quantity,
            totalPrice,
            onIncrement,
            onDecrement}} />
      </div>
    </div>
)

OrderCard.propTypes = {
  selectedMeal: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    quantity: state.orderCard.quantity,
    totalPrice: state.orderCard.totalPrice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => dispatch(actions.hideWidget('orderCard')),
    addToBag: (item, quantity) => {
      dispatch(actions.addToShoppingBag({ item, quantity }))
      dispatch(actions.hideWidget('orderCard'))
    },
    onIncrement: () => dispatch(actions.incrementQuantity('orderCard')),
    onDecrement: () => dispatch(actions.decrementQuantity('orderCard'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCard)
