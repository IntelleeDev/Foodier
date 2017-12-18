import React from 'react'
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'

import { Routes } from '../config/routes'
import { Content, Footer } from './screens/commons'
import { Header } from './screens/commons/navigation'
import { Section } from './screens/utils'

const App = () => (
  <Router history={browserHistory}>
    <Section>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </Section>
  </Router>
)

export default App
