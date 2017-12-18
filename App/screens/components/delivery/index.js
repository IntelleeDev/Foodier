import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Form } from './form'
import { Segment, Button } from '../../widgets'
import { Row, Column, Section } from '../../utils'

const styles = {
  padding: { padding: '5px' },
  leftPad: { paddingLeft: '5px' },
  rightPad: { paddingRight: '5px' }
}

const Delivery = ({ backToCheckout }) => (
  <Section className='delivery'>
    <div className='content'>
      <Row className='no-gutters'>
        <Column xSmall={6}>
          <h4 style={styles.leftPad}>DELIVERY DETAILS</h4>
        </Column>
        <Column xSmall={6}>
          <div className='right'>
            <Button
              title='back to shop'
              onClick={backToCheckout} />
          </div>
        </Column>
      </Row>
      <Segment
        headerColor='dark'
        title='Fill in the delivery details'>
        <Form />
      </Segment>
    </div>
  </Section>
)

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    backToCheckout: () => history.goBack()
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Delivery))
