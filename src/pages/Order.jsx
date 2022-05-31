import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/Order.scss";
import OrderItem from "../components/OrderItem";
import axios from "axios";

const Order = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async (status) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios({
        method: "get",
        url: "https://k24-server-1.herokuapp.com/order",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        params: {
          status: status,
        },
      });
      setStatus(status);
      setOrders(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main">
      {loading && <Loading />}
      <Header />
      <div className="order_main">
        <ul className="order__status">
          <li className={status || "active"} onClick={() => handleGetOrders()}>
            <span>Tất cả</span>
          </li>
          <li
            className={status == "watting" ? "active" : ""}
            onClick={() => handleGetOrders("watting")}
          >
            <span>Đang chờ lấy hàng</span>
          </li>
          <li
            className={status == "shipping" ? "active" : ""}
            onClick={() => handleGetOrders("shipping")}
          >
            <span>Đang giao hàng</span>
          </li>
          <li
            className={status == "completed" ? "active" : ""}
            onClick={() => handleGetOrders("completed")}
          >
            <span>Hoàn thành</span>
          </li>
          <li
            className={status == "cancelled" ? "active" : ""}
            onClick={() => handleGetOrders("canceled")}
          >
            <span>Đã huỷ</span>
          </li>
        </ul>
        {orders.map((order) => {
          return (
            <OrderItem
              status={order.status}
              products={order.products}
              price={order.total_price}
            />
          );
        })}
      </div>
    </div>
  );
};

Order.propTypes = {};

export default Order;
