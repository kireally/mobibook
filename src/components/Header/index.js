import React from 'react'

import './style.css'

import Menu from './menu'
import Logo from './logo'
import Navigation from './Navigation'


export const Header = () => {
  return (
    <header>
      <Menu />
      <Logo />
      <Navigation />
    </header>
    
  )
}
