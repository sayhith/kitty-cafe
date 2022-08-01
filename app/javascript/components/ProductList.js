import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  const renderProducts = (productArray) => {
    // productArray.sort((a, b) => new Date(b.product_date) - new Date(a.event_date));

    return productArray.map((product) => (
      <li key={product.id}>
        {product.name}
        {' - '}
        {product.price}
      </li>
    ));
  };

  return (
    <section>
      <h2>Products</h2>
      <ul>{renderProducts(products)}</ul>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  })).isRequired,
};

export default ProductList;