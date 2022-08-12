// import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
// import Header from './Header';
import Home from '../react/src/Home';
import Cats from '../react/src/Cats';
import Recipes from '../react/src/Recipes';
import Market from '../react/src/Market';
import { Route, Routes } from 'react-router-dom';

const Editor = () => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await window.fetch('/api/products');
  //       if (!response.ok) throw Error(response.statusText);
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setIsError(true);
  //       console.error(error);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/market' element={<Market />} />
        </Routes>
      </div>
    </>
  );
};

export default Editor;