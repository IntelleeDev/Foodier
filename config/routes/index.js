import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../App/screens/components/home'
import Meals from '../../App/screens/components/meals'
import SignIn from '../../App/screens/components/signin'
import Delivery from '../../App/screens/components/delivery'
import CheckOut from '../../App/screens/components/checkout'
import Restaurants from '../../App/screens/components/restaurants'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/signin' component={SignIn} />
    <Route exact path='/checkout' component={CheckOut} />
    <Route exact path='/checkout/delivery' component={Delivery} />
    <Route exact path='/restaurants/:restaurant/meals' component={Meals} />
    <Route exact path='/areas/:area/restaurants' component={Restaurants} />
  </Switch>
)
