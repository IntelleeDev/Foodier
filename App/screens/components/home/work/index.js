import React from 'react'
import { Space } from '../../../utils'

const Work = () => (
  <section className='generic-box basic'>
    <div className='centerfy'>
      <h2>How it works</h2>
      <div className='underline' />
    </div>

    <br /><br />
    <Space />
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='vector-info'>
            <div><i className='fa fa-mobile medium-i color-primary' /></div>
            <p className='bold tiny'>
              Place your order from our affiliated restaurants
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='vector-info'>
            <div><i className='fa fa-inbox medium-i color-primary' /></div>
            <p className='bold tiny'>
              Your order gets prepared and packaged ready for delivery
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='vector-info'>
            <div><i className='fa fa-bicycle medium-i color-primary' /></div>
            <p className='bold tiny'>
              Food gets delivered to you fresh and hot in less than
            </p>
            <strong className='tiny color-primary'>
              <i className='fa fa-clock-o' />
              &nbsp;20 mins
            </strong>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Work
