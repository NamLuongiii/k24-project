import React from "react";
import "../styles/css/base.css";
import "../styles/css/main.css";
import "../styles/css/grid.css";
import "../styles/css/responsive.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row">
            <div className="col l-2-4">
              <h3 className="footer__heading">Chăm sóc khách hàng</h3>
              <ul className="footer__list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    F8-Shop Mall
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4">
              <h3 className="footer__heading">Giới thiệu</h3>
              <ul className="footer__list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Flash Sales
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Kênh người bán
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Liên hệ với truyền thông
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4">
              <h3 className="footer__heading">Danh mục</h3>
              <ul className="footer__list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4">
              <h3 className="footer__heading">Theo dõi</h3>
              <ul className="footer__list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    <i className="footer-item__icon footer-item__icon--facebook fab fa-facebook">
                      <BsFacebook />
                    </i>

                    <b className="">Facebook</b>
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    <i className="footer-item__icon fab fa-instagram-square">
                      <AiFillInstagram />
                    </i>
                    <b className="">Instagram</b>
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    <i className="footer-item__icon fab fa-linkedin">
                      <AiFillLinkedin />
                    </i>
                    <b className="">Linkedin</b>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-8 c-12">
              <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
              <div className="footer__download">
                <img
                  src="https://raw.githubusercontent.com/tranvinhluan/SHOPEE/master/assets/img/QR_code.png"
                  alt="Download QR"
                  className="footer__download-qr"
                />
                <div className="footer__download-apps">
                  <a href="" className="footer__download-app-link">
                    <img
                      src="https://raw.githubusercontent.com/tranvinhluan/SHOPEE/master/assets/img/gg_Play.png"
                      alt="Google Play"
                      className="footer__download-app-img footer__download-app-img-google-play"
                    />
                  </a>
                  <a href="" className="footer__download-app-link">
                    <img
                      src="https://raw.githubusercontent.com/tranvinhluan/SHOPEE/master/assets/img/app_store.png"
                      alt="App Store"
                      className="footer__download-app-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide">
            <p className="footer__text">
              © 2022 - Bản quyền thuộc về Tran Luan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
