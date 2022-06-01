import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { UilMinus, UilPlus, UilTrashAlt, UilEditAlt   } from '@iconscout/react-unicons'
import "../styles/Cart.scss"
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/images/logo-2.png";
import Loading from "../components/Loading";
import "../styles/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/_cart";

const URL = 'https://k24-server-1.herokuapp.com'

function Cart(props) {
    const navigate = useNavigate()
	const dispatch = useDispatch();

    const token = localStorage.getItem("token")

    const {cart} = useSelector(state => state.cartReducer);

    const products = cart ? cart.products : [];
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    const getProduct = async () => {
        try {
            const data = await axios({
                method: "GET",
                url: URL + "/cart",
                headers: {
                "Content-Type": "application/json",
                token: token,
            },
            })
            // setProducts(data.data.products)
            const action = setCart(data.data)
            dispatch(action);

        } catch (error) {
            console.log(error.message);
        }
    }

    const convertData = () => {
        return products.map(product => {
            return (
                {
                    product: product.product._id,
                    quantity: product.quantity
                }
            )
        })
    }

    

    const apiUpdateQuantity = async (products, product) => {
        try {
            const resultfilter = products.filter(productItem => {
                return productItem.product !== product.product
            })
            await axios(
            {
                method: "PUT",
                url: URL + "/cart",
                headers: {
                    "Content-Type": "application/json",
                    token: token,
                },
                data: {
                    products: [...resultfilter, product]
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    const decreaseQuantity = async (product) => {
        try {
            setDisabled(true)
            await apiUpdateQuantity(convertData(), { product: product.product._id, quantity: product.quantity - 1 })
            await getProduct()
            setDisabled(false)            
        } catch (error) {
            alert(error.message)
        }
    }

    const increaseQuantity = async (product) => {
        try {
            setDisabled(true)
            await apiUpdateQuantity(convertData(), { product: product.product._id, quantity: product.quantity + 1 })
            await getProduct()
            setDisabled(false)
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteProduct = async (product) => {
        try {
            const resultfilter = products.filter(productItem => {
                return productItem.product !== product.product
            })
            await axios(
            {
                method: "PUT",
                url: URL + "/cart",
                headers: {
                    "Content-Type": "application/json",
                    token: token,
                },
                data: {
                    products: resultfilter
                }
            })
            await getProduct()
        } catch (error) {
            console.log(error.message);
        }
    }

    const totalPrice = () => {
        let totalPrice = 0
        products.forEach((product) => {
            return totalPrice += (product.product.price * product.quantity)
        })
        return totalPrice
    }

    const updateQuantity = () => {

    }

    
    return (
        <div>
            {/* <header className="header-cart">
                <div style={{ display: "flex", alignItems: "center", width: 300 }}>
                    <img
                        src={logo2}
                        alt="logo"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <h2>Giỏ Hàng</h2>
                </div>

                <div className="searchbar">
                    <div className="searchbar-main">
                        <form action="" className="searchbar-input">
                            <input type="text" placeholder="Siêu hội thời trang" />
                        </form>
                    </div>
                    <button>
                        <FaSearch />
                    </button>
                </div>
            </header> */}
            <section className="content-product">
                <div className="content-product__main">
                    <div className="_2eZQze">
                        <div className="_2cHnzN">
                            Sản phẩm
                        </div>
                        <div className="_2UJcxH">
                            Đơn giá
                        </div>
                        <div className="_1SKeIp">
                            Số lượng
                        </div>
                        <div className="_2LUhSC">
                            Số tiền
                        </div>
                        <div className="HHdkhO">
                            Thao tác
                        </div>
                    </div>
                    {products.map((product) => {
                        return (
                            <div className="_1glehh" key={product.product._id}>
                                <div className="iT6kEc">
                                    <div className="_1BehlF VXs3As">
                                        <div className="_-0yJ2-">
                                            <div className="_1Z2fe1">
                                                <div className="_3mceb9">
                                                    <Link to='detail'>
                                                        <img src={product.product.image} alt="" />
                                                    </Link>
                                                    <div className="_1WfuBi">
                                                        <Link className="_3t5Sij" to=''>
                                                            <h3>{product.product.name}</h3>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="_1C6zuo">
                                                <div>
                                                    <span className="_1E5-FE">
                                                        {product.product.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="_2vZsK0">
                                                <div className="_3he7rw shopee-input-quantity">
                                                    <button 
                                                        className="_3Ell0h" 
                                                        onClick={() => { decreaseQuantity(product) }}
                                                        disabled={disabled}
                                                    >
                                                        <UilMinus />
                                                    </button>
                                                    <input 
                                                        type="text" 
                                                        className="_3Ell0h _37H5-t" 
                                                        value={product.quantity}
                                                        onChange={() => { updateQuantity(product.product) }}
                                                        disabled={disabled}
                                                    />
                                                    <button 
                                                        className="_3Ell0h" 
                                                        onClick={() => { increaseQuantity(product) }}
                                                        disabled={disabled}
                                                    >
                                                        <UilPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="_2S6DJl">
                                                <span>{(product.product.price * product.quantity).toFixed(2)}</span>
                                            </div>
                                            <div className="_1-z5aG _1AeN8q">
                                                <button onClick={() => deleteProduct(product)}>
                                                    <UilTrashAlt />
                                                </button>
                                                <button>
                                                    <UilEditAlt />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <span></span>
                        <span>{totalPrice()}</span>
                        <button className="btn-buy" onClick={() => {
                            navigate("/createOrder")
                        }}> Mua Hàng </button>
                    </div>
                    
                </div>
                

            </section>
        </div>
    );
}

export default Cart;