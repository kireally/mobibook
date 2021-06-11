import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { ROUTES } from '../consts'

import { Header } from '../components/Header/index'
import MainPage from '../pages/Main'
import ProfilePage from '../pages/Profile'
import FavoritePage from '../pages/Favorite'
import ShoppingCartPage from '../pages/ShoppingCart'

const Navigator = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path={ROUTES.MAIN} component={MainPage}/>
        <Route path={ROUTES.PROFILE} component={ProfilePage}/>
        <Route path={ROUTES.FAVORITE} component={FavoritePage}/>
        <Route path={ROUTES.SHOPPING_CART} component={ShoppingCartPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Navigator