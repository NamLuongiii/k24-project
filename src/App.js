import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import LoginPage from "./pages/login"
import Homepage from "./pages/homepage"
import UserPage from "./pages/user"
import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./redux/_app"


function App() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { isLogin } = useSelector(state => state.app);

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const action = login();
            dispatch(action);
        } else {
            const action = logout();
            dispatch(action);
        }
    }, [localStorage.getItem("token")])

    return (
        <div className="App">
            <Routes>
                {isLogin && (
                    <>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/user" element={<UserPage />}></Route>
                    </>
                )}

                {isLogin == false && (
                    <>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route
                            path="/*"
                            element={
                                <div>
                                    <button onClick={() => navigate("/login")}>
                                        Go to login
                                    </button>
                                </div>
                            }
                        ></Route>
                    </>
                )}
            </Routes>
        </div>
    )
}

export default App
