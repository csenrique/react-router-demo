import {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import ProductsList from '../components/ProductsList';
import Axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
  }, [])

  return (
    <>
        <h4>Products Page</h4>
        <Routes>
          <Route index element={<ProductsList products = {products} />} />
          <Route path=':productId' element={<ProductDetail />} />
        </Routes>
    </>
    
  )
}

export default Products