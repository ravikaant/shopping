import React from 'react';
import './styles.css';

const RenderProduct = props => {
  return (
    <div className="product-container">
      <img src={props.searchImage} alt={props.productName} width={200}></img>
      <h3>{props.brand}</h3>
      <h4>{props.productName}</h4>
      <h4>Price RS. {props.price}</h4>
    </div>
  )
};

export default RenderProduct;
