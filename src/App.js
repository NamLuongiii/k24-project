import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import LoginPage from "./pages/login"
import Homepage from "./pages/homepage"
import UserPage from "./pages/user"
import { useEffect, useState } from "react"

function App() {
    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
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
