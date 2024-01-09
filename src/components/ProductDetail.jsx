import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeProduct, selectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.allProducts.product)
  const { id, title, image, price, category, description } = product
  const { productId } = useParams()

  const fetchProductDetail = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      dispatch(selectedProduct(data))
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    if (productId && productId !== "")
      fetchProductDetail()
    return () => {
      dispatch(removeProduct())
    }
  }, [productId])

  return (
    <>
      {
        Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
          <div className='product-detail'>
            <div className='left'>
              <img src={image} alt={title} />
            </div>
            <div className='right'>
              <h1>{title}</h1>
              <p>{price}</p>
              <p>{description}</p>
              <button>Add to cart</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProductDetail