import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateOrder.scss";
import logo2 from "../assets/images/logo-2.png";
export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState();

    return (
        <div>
            <header>
                <div style={{ display: "flex", alignItems: "center", width: 300 }}>
                    <img src={logo2} alt="logo" />
                    <span>Thanh toán</span>
                </div>
            </header>

            <div className="main__Cart">
                <div className="borderCart"></div>
                <div className="box__Cart">
                    <div className="boxAddress__title">Địa chỉ nhận hàng</div>

                    <div className="boxAddress__detail">
                        <span className="namePhone">Phước Vũ - 0963798796</span>
                        <span className="address">89 Láng Hạ, Đống Đa , Hà Nội</span>
                        <span className="optionDefault">Mặc định</span>
                        <a href="#" className="btnChange">Thay đổi</a>
                    </div>

                </div>

                <div className="box__Cart">
                    <div className="cart_title_header">
                        <span className="flex-4">Sản phẩm</span>
                        <span className="flex-2">Phân loại</span>
                        <span className="flex-1">Đơn giá</span>
                        <span className="flex-1">Số lượng</span>
                        <span className="flex-2">Thành tiền</span>
                    </div>
                    <div className="cart_detail">

                        <span className="flex-4">
                            <img src="" alt="" />

                            <span>Giá Treo Máy Tính NB - F100A Phù Hợp Màn Hình 22" - 35 "</span>
                        </span>
                        <span className="flex-2">Trắng</span>
                        <span className="flex-1">đ 669.000</span>
                        <span className="flex-1">1</span>
                        <span className="flex-2">đ 669.000</span>
                    </div>
                </div>

                <div className="cart_pay">
                    <div className="cart_pay_lbl">
                        <span>Tổng số tiền </span>

                        <span>đ 669.000</span>
                    </div>

                    <div className="cart_group_btn">
                        <span>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shopee</span>

                        <button className="btnCreateOrder">
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
