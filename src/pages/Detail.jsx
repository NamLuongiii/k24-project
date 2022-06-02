import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from '../components/Loading.jsx'
import "../styles/Detail.scss"

function Detail(props) {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Add to Cart");

  const token = localStorage.getItem("token");
  
  let { id } = useParams();
  let navigate = useNavigate();

  const productInfo = async () => {
    setLoading(true);
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
      setLoading(false);
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
    document.getElementById("addtocart").setAttribute("disabled", "disabled");
    setLoadingText("Adding...");

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
      setLoadingText("Complete...");

      setTimeout(function(){
          navigate("/cart")
      }, 1000);
    }
  };

  return (
    <div>
      {
        loading ? <>
          <Loading />
        </> : <>
          <div className="container">
            <div
              className="product-detail-container"
              style={{ marginTop: "80px" }}
            >
              <div className="box-image">
                <div className="gallery-item item-main">
                  <img src={product.image} />
                </div>
              </div>

              <div className="box-info">
                <h2 className="name">{product.name}</h2>

                <div className="price-stock clearfix">
                  <div className="info-price">{product.price}</div>
                  <div className="stock">In stock</div>
                </div>

                <div className="description">
                  Form áo: OVERSIZE form rộng chuẩn TAY LỠ UNISEX cực đẹp. Ngày nay áo phông nam tay lỡ được coi là món đồ " Must have " trong tủ đồ của các tín đồ về thời trang...
                </div>

                <div className="add-to-cart">
                  {token ? (
                    <button id="addtocart" className="addtocart" onClick={handleAddCart}>
                      {loadingText}
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
        </>
      }

    </div>
  );
}

export default Detail;
