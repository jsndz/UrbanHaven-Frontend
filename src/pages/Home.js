import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/ProductList/ProductList'

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}
