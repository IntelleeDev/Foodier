import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBag from '../../widgets/shopping-bag'

export const Header = () => (
  <header className='page-bar'>
    <nav className='container'>
      <div className='row'>
        <Logo />
        <NavLinks />
        <AccountActions />
      </div>
    </nav>
  </header>
)

const Logo = () => (
  <div className='col'>
    <Link className='active' to='/'>
      <h4><i className='fa fa-cutlery' />&nbsp;foodier</h4>
    </Link>
  </div>
)

const NavLinks = () => (
  <div className='col-6 col-sm-0 col-hidden'>
    <div className='centerfy'>
      <ul className='app-navigation'>
        <li>
          <Link className='bold' to=''>
            <i className='fa fa-building-o' />
              &nbsp;&nbsp;About
          </Link>
        </li>
        <li>
          <Link className='bold' to=''>
            <i className='fa fa-map-marker' />
              &nbsp;&nbsp;Coverage
          </Link>
        </li>
        <li>
          <Link className='bold' to=''>
            <i className='fa fa-bicycle' />
            &nbsp;&nbsp;Place order
          </Link>
        </li>
        <li>
          <Link className='bold' to=''>
            <i className='fa fa-users' />
              &nbsp;&nbsp;Be our chef
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

const AccountActions = () => (
  <div className='col'>
    <div className='button-group'>
      <Link className='button bold small-font' to='/signin'>
        <i className='fa fa-sign-in' />&nbsp;&nbsp;Sign in
      </Link>
      <span style={{ padding: '0px 3px' }} />
      <button className='button primary bold'>
        <i className='fa fa-user' />&nbsp;&nbsp;Sign up
      </button>
      <ShoppingBag />
    </div>
  </div>
)
