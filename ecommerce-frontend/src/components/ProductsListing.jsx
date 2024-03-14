import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { products } from '../products'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/products/productSlice'

function ProductsListing ({ setCount }) {
  const newProducts = products
  const dispatch = useDispatch();

  const addProductHandler = product => {
    dispatch(addProduct(product))
    setCount(prev => prev + 1)
  }
  return (
    <div style={{ display: 'flex' }}>
      {newProducts &&
        Array.isArray(newProducts) &&
        newProducts.map(product => (
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={product.image}
              style={{ height: '10rem', width: '10rem' }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>rs {product.price}</Card.Text>
              <Button
                variant='primary'
                onClick={() => addProductHandler(product)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default ProductsListing
