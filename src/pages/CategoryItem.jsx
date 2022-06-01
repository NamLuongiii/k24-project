import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import "../styles/CategoryItem.scss";

function CategoryItem(props) {
  let { id } = useParams();

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
    try {
      const endpoint =
        "https://k24-server-1.herokuapp.com/category/" + id + "/product";

      const { data } = await axios({
        url: endpoint,
        headers: {},
        data: {},
      });

      setCategoryItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {/* <h4>{"Category: " + id}</h4> */}
      <h1>Category Item sản phẩm</h1>
      
      <div className="category-item__list">
        {categoryItem.items.map((value, index) => (
          <Product key={index} product={value} />
        ))}
      </div>
    </div>
  );
}

export default CategoryItem;
