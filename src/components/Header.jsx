import React, { useState } from "react";
import { Tooltip  } from 'antd';

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { GoSearch } from "react-icons/go";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logoWhite from "../assets/images/logoWhite.png";
import "../styles/Header.scss";

function Header(props) {
 
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userReducer);

  const token = localStorage.getItem("token");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigate("/search?keyword=" + search);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  const handleCart = () => {
    if (token) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <section className="header__logo">
        <img
          src={logoWhite}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </section>

      <section className="header__search">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={handleKeypress}
        />
        <button className="btnSearch" onClick={handleSearch}>
          <GoSearch />
        </button>
      </section>

      {/* <h1>{user ? user.name : ''}</h1> */}
      <section className="header__option">
        <button>Kênh người bán</button>
        <span>|</span>
        <button>Tải ứng dụng</button>
        <span>|</span>
        <button>Kết nối</button>
        <AiFillFacebook className="fb" />
        <AiFillInstagram className="ig" />
      </section>

      <section className="header__cart">
        <CgShoppingCart onClick={handleCart} />
      </section>

      {/* <h1>{user ? user.name : ""}</h1> */}

      <section className="header__user">
        {
          token === null ? (
            <div>
              <button
                onClick={() => {
                  navigate("/register");
                }}
              >
                Đăng ký
              </button>
              <span>|</span>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Đăng nhập
              </button>
            </div>
          ) : (
                // <Tooltip
                //   placement="bottom"
                //   title={<div style={{ color: 'blue' }}>prompt text</div>}  
                // >
                <div className="header__user-name">{user ? user.name : ""}</div>
              // </Tooltip>
              
          )
          // dùng tippy .

          // (
          //   <div>
          //     <button
          //       onClick={() => {
          //         navigate("/profile");
          //       }}
          //     >
          //       Tài khoản của bạn
          //     </button>
          //     <span style={{ color: "#fff" }}>|</span>
          //     <button
          //       onClick={() => {
          //         localStorage.removeItem("token");
          //         navigate("/");
          //       }}
          //     >
          //       Đăng xuất
          //     </button>
          //   </div>
          // )
        }


      </section>
    </div>
  );
}

export default Header;
