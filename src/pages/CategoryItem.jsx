import axios from "axios";
// import { set } from "immer/dist/internal";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Product from "../components/Product";
import "../styles/CategoryItem.scss";

function CategoryItem(props) {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [categoryItem, setCategoryItem] = useState({
    items: [],
    limit: 10,
    page: 0,
    total_item: 0,
  });

  useEffect(() => {
    loadCategoryItem();
  }, []);

  const loadCategoryItem = async () => {
    setLoading(true);
    try {
      const endpoint =
        "https://k24-server-1.herokuapp.com/category/" + id + "/product";

      const { data } = await axios({
        url: endpoint,
        method: 'get',
        headers: {},
        data: {},
      });

      setCategoryItem(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <Header />
      
      <div className="category-item__main">
        <div className="container">
          {/* <h4>{"Category: " + id}</h4> */}
          <div className="category-item__title">Category Item sản phẩm:</div>
    
          {loading ? (
            <Loading />
          ) : (
            <div className="container">
              <div className="row">
                
                <div className="category-item__list">
                  {categoryItem.items.map((value, index) => (
                      <Product key={index} product={value} />
                  ))}
                </div>
              </div>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
