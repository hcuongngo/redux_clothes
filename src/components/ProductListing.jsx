import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allProducts.products)

  const fetchingProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      dispatch(setProducts(data))
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  return (
    <>
      {
        products?.length === 0 ? (<div>
          Loading...
        </div>) : (<div className='products-container'>
          {
            products.map(product => {
              const { id, title, image, price, category } = product
              return (
                <div key={id} className='product-item'>
                  <Link to={`/${id}`}>
                    <div className='item-img'>
                      <img src={image} alt={title} />
                    </div>
                    <div className='item-content'>
                      <p>{title}</p>
                      <p>${price}</p>
                      <p>{category}</p>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>)
      }
    </>
  )
}

export default ProductListing