import React, { useState } from 'react'
import Menubar from './Menubar'
import ProductsListing from './ProductsListing'

function HomePage (props) {
  const [count, setCount] = useState(0)
  return (
    <>
      <Menubar count={count} />
      <hr />
      <ProductsListing setCount={setCount} />
    </>
  )
}

export default HomePage
