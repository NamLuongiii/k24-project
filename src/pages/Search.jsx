import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Product from "../components/Product";
import "../styles/Search.scss";

function Search(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");

  const [data, setData] = useState({
    items: [],
    limit: 10,
    page: 0,
    total_item: 0,
  });

  useEffect(() => {
    loadProducts();
  }, [keyword, page]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const endpoint =
        "https://k24-server-1.herokuapp.com/product?search=" +
        keyword +
        "&page=" +
        page;

      const { data } = await axios({
        url: endpoint,
        headers: {},
        data: {},
      });

      setData(data);

      // localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const totalPage = Math.ceil(data.total_item / data.limit);

  const Pagination = [];
  for (let index = 0; index < totalPage; index++) {
    Pagination.push(
      <button
        onClick={() => {
          // /search?keyword=product&page=index
          const host = `${window.location.pathname}?keyword=${searchParams.get(
            "keyword"
          )}&page=${index}`;
          navigate(host);
        }}
      >
        {index + 1}
      </button>
    );
  }

  return (
    <div
      style={{
        marginBottom: "100px",
      }}
    >
      <Header />

      {
        // loading ? (
        // <Loading />
        // ) :
        <div className="products container">
          <div className="row" style={{width: '100%'}}>
            {data.items.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      }

      {Pagination}

      <Footer />
    </div>
  );
}

export default Search;
