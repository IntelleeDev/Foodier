import React from 'react'

const MenuForYou = () => (
  <section className='generic-box basic'>
    <div className='centerfy space'>
      <h2>A menu for you</h2>
      <div className='underline' />
    </div>

    <br /><br />
    <div className='space' />
    <div className='space' />

    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img className='image-fluid' src='/images/chicken.jpg' alt='menu' />
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img className='image-fluid' src='/images/lunc.jpg' alt='menu' />
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img className='image-fluid' src='/images/dinner.jpg' alt='menu' />
          </div>
        </div>

      </div>
    </div>

    <br />
    <div className='centerfy space'>
      <a href='/restaurants' className='button primary bold'>
        <i className='fa fa-bicycle' />
        place your order
      </a>
    </div>
  </section>
)

export default MenuForYou
