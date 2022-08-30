
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import Axios from 'axios';

const SearchResults = () => {

    const [serachParams] = useSearchParams();


    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`https://dummyjson.com/products/search?q=${serachParams.get("keyword")}`)
             .then(res => setProducts(res.data.products))
    }, [serachParams]);

  return (
    <> 
        <div>Search Results</div>
        {products.length == 0 && <em> No products found!</em>} {"  "}
        {products.length && <ProductsList products = {products} />} 
    </>
   
  )
}

export default SearchResults