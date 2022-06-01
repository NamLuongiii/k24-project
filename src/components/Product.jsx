import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__image">
        <Link to={"/product/" + product._id}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product__name">
        <Link to={"/product/" + product._id}>{product.name}</Link>
      </div>
      <div className="product__price">{product.price.toLocaleString()}₫</div>
    </div>
  );
}

export default Product;
