import React from 'react'
import { connect } from 'react-redux'

import FormCard from '../../widgets/form-card'
import { Row, Column } from '../../utils'

import * as actions from '../../../stores/actions'
import '../../../../../../../public/css/form.css'

const SignIn = ({ closeForm }) => (
  <FormCard
    title={<span className='color-primary'><i className='fa fa-cutlery' />&nbsp;foodier</span>}
    closeForm={closeForm}>
    <br />
    <Row>
      <Column xSmall={6} small={6}>
        <button className='button facebook bold small-font'>Sign in with Facebook</button>
      </Column>
      <Column xSmall={6} small={6}>
        <button className='button float-right google-plus bold small-font'>Sign in with Google+</button>
      </Column>
    </Row>
    <div className='centerfy' style={{ margin: '2% auto' }}>
      <span className='bold small-font'>Or</span>
    </div>
    <Row>
      <Column xSmall={1} small={1}>
        <div className='centerfy' style={{ padding: '15px  0px 0px' }}>
          <i className='fa fa-user' />
        </div>
      </Column>
      <Column xSmall={11} small={11}>
        <input type='text' placeholder='Username' />
      </Column>
    </Row>
    <Row>
      <Column xSmall={1} small={1}>
        <div className='centerfy' style={{ padding: '15px  0px 0px' }}>
          <i className='fa fa-key' />
        </div>
      </Column>
      <Column xSmall={11} small={11}>
        <input type='password' placeholder='Password' />
      </Column>
    </Row>
    <br />
    <div>
      <button className='button primary small-font bold fluid'>Sign In</button>
    </div>
  </FormCard>
)

export default connect(
  (state) => ({}),
  (dispatch) => ({
    closeForm: () => dispatch(actions.hideSignInForm())
  }))(SignIn)
