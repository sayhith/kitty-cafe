import React, { useState, useEffect } from 'react';
import ProductList from '../../ProductList';


const Market = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/products');
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      
        setIsLoading(false);
    };

    fetchData();
  }, []);


    return  (
      <> 
        <h1>The Market</h1>
        {isError && <p>Something went wrong. Check the console.</p>}

        {isLoading ? <p>Loading...</p> : <ProductList products={products} />}
      </>
    );
};

export default Market;