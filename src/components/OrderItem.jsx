import React from "react";
import PropTypes from "prop-types";
import "../styles/Order.scss";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ status, products = [], price }) => {
  const navigate = useNavigate();
  return (
    <div className="order">
      <div className="title">
        <div>Trạng thái: {status}</div>
      </div>
      <div className="products">
        {products.map((product) => {
          return (
            <div
              key={product.product._id}
              className="product__detail"
              onClick={() => {
                navigate(`/product/${product.product._id}`);
              }}
            >
              <img
                className="image pointer"
                src={product.product.image}
                alt="123"
              />
              <div className="product_content">
                <div className="product__title">
                  <span className="pointer">{product.product.name}</span>
                </div>
                <div className="product__quantity">
                  Số lượng: {product.quantity}
                </div>
                <div className="product__price">{product.product.price}đ</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="summary">
        Tổng tiền:
        <span className="product__price total">{price}đ</span>
      </div>
    </div>
  );
};

OrderItem.propTypes = {};

export default OrderItem;
