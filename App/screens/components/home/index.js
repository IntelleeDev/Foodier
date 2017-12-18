import React from 'react'

import Work from './work'
import Caption from './caption'
import SearchBox from './search-box'
import MenuForYou from '../Home/menu-for-you'
import { Space, Section } from '../../utils'

import '../../../../../../../public/css/welcome.css'

const Home = () => (
  <Section>
    <SearchSection>
      <br />
      <Caption text='Hygienic and delicious meals right to your doorstep' />
      <SearchBox />
      <Space />
    </SearchSection>
    <Work />
    <MenuForYou />
    <Space />
  </Section>
)

const SearchSection = ({ children }) => (
  <section className='food-search-section'>
    {children}
  </section>
)

export default Home
