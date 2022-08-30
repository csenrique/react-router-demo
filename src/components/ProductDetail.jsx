import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const ProductDetail = () => {

  const [product, setProduct] = useState(null);

  const { productId } = useParams(); // El use Params devuelve un objeto tipo clave valor (clave: nombre del parametro
  // Valor: el valor del parametro), aqui estamos desestructurando el objeto, igual lo pudimos haber llamado completo Ej: const params = useParams();

  useEffect(() => {
    Axios.get(`https://dummyjson.com/products/${productId}`)
        .then(res => setProduct(res.data))
  }, [productId])

  return (
    <>
      {!product && (<em> Loading ...</em>)}
      {product && (
        <>
          <h3>Product Detail Page: { product.title }</h3>
          <img src={product.thumbnail} alt= {product.title} width="200px"/>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <Link to='/products' >Back to products page</Link>
        </>
      )}
    </> 
  )
}

export default ProductDetail