import React from 'react'

import { ProductNavigation } from '../../components/ProductNavigation'
import {ProductList} from '../../components/ProductList'




const Main = () => {
  return (
    <div>
      <ProductNavigation/>
      <ProductList/>
    </div>
  )
}

export default Main