import React, { Component } from 'react'

import { Button } from '../../../widgets'
import { Row, Column } from '../../../utils'

export class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isValid: false,
      address: '',
      fullname: '',
      landmark: '',
      phoneNumber: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.validateFields = this.validateFields.bind(this)
  }

  handleOnChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })

    console.log(`${name}: ${value}`)
    console.log(this.state)
  }

  validateFields () { }

  render () {
    const { isValid } = this.state
    return (
      <div>
        <form className=''>
          <Row className='no-gutters'>
            <Column xSmall={1} small={1}>
              <div className='fluid'>
                <i className='fa fa-user' />
              </div>
            </Column>
            <Column xSmall={11} small={11}>
              <div className='fluid left'>
                <input
                  type='text'
                  name='fullname'
                  placeholder='Fullname'
                  onChange={this.handleOnChange} />
              </div>
            </Column>
          </Row>

          <Row className='no-gutters'>
            <Column xSmall={1} small={1}>
              <div className='fluid'>
                <i className='fa fa-phone' />
              </div>
            </Column>
            <Column xSmall={11} small={11}>
              <div className='fluid left'>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  onKeyUp={this.handleOnChange} />
              </div>
            </Column>
          </Row>

          <Row className='no-gutters'>
            <Column xSmall={1} small={1}>
              <div className='fluid'>
                <i className='fa fa-phone' />
              </div>
            </Column>
            <Column xSmall={11} small={11}>
              <div className='fluid left'>
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  onChange={this.handleOnChange} />
              </div>
            </Column>
          </Row>

          <Row className='no-gutters'>
            <Column xSmall={1} small={1}>
              <div className='fluid'>
                <i className='fa fa-pointer' />
              </div>
            </Column>
            <Column xSmall={10} small={10}>
              <div className='fluid left'>
                <input
                  type='text'
                  name='landmark'
                  placeholder='Landmark'
                  onChange={this.handleOnChange} />
              </div>
            </Column>
          </Row>

          <div>
            <Button
              isDisabled={!isValid}
              title='make payment'
              className='primary' />
          </div>
        </form>
      </div>
    )
  }
}
