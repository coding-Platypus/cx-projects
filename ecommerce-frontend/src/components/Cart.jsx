import React, { useState } from 'react'
import Menubar from './Menubar'
import { useSelector } from 'react-redux'

function Cart () {
  const selectedProducts = useSelector(state => state.products)
  const totalPrice = selectedProducts?.reduce(
    (acc, selectedProduct) => acc + selectedProduct.product.price,
    0
  )

  return (
    <>
      <h2>Cart</h2>
      <hr />
      {selectedProducts &&
        Array.isArray(selectedProducts) &&
        selectedProducts.map(selectedProduct => (
          <>
            <div
              key={selectedProduct.product.id}
              style={{ display: 'flex', gap: '20rem' }}
            >
              <div>
                <img
                  src={selectedProduct.product.image}
                  style={{ height: '10rem', width: '10rem' }}
                  alt='product-image'
                />
                <h3>{selectedProduct.product.name}</h3>
              </div>
              <div>
                <h3>Price</h3>
                <p>rs {selectedProduct.product.price}</p>
              </div>
            </div>
            <hr />
          </>
        ))}
      {totalPrice > 0 && selectedProducts.length > 0 ? (
        <div style={{ display: 'flex', gap: '25rem' }}>
          <p>Total Price</p>
          <p>rs {totalPrice}</p>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </>
  )
}

export default Cart
