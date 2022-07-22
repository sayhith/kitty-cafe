import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';

const Editor = () => {
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

  return (
    <>
      <Header />
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading ? <p>Loading...</p> : <ProductList products={products} />}
    </>
  );
};

export default Editor;