import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Detail(props) {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");
  let { id } = useParams();
  let navigate = useNavigate();

  const productInfo = async () => {
    try {
      const url = "https://k24-server-1.herokuapp.com/product/" + id;

      const { data } = await axios({
        url: url,
        method: "get",
      });

      setProduct(data);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };

  useEffect(() => {
    productInfo();
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const url = "https://k24-server-1.herokuapp.com/cart";

      const { data } = await axios({
        url: url,
        method: "get",
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setCartItems(data.products);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };

  const handleAddCart = async () => {
    try {
      const url = "https://k24-server-1.herokuapp.com/cart";

      await axios({
        url: url,
        method: "put",
        headers: {
          token: localStorage.getItem("token"),
        },

        data: {
          products: [
            ...cartItems,
            {
              product: id,
              quantity: 1,
            },
          ],
        },
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      navigate("/cart");
    }
  };

  return (
    <div>
      <Header />

      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="product-detail-container">
          <div className="box-image">
            <div className="gallery-item item-main">
              <img src={product.image} />
            </div>
          </div>

          <div className="box-info">
            <h2>{product.name}</h2>

            <div className="price-stock clearfix">
              <div className="info-price">{product.price}</div>
              <div className="stock">In stock</div>
            </div>

            <div className="add-to-cart">
              {token ? (
                <button className="addtocart" onClick={handleAddCart}>
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
