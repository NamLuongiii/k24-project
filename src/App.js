import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import LoginPage from "./pages/login"
import Homepage from "./pages/homepage"
import UserPage from "./pages/user"
import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./redux/_app"
import routers from "./router"
import PrivateRouter from './components/privateRouter.jsx';

function App() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    

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
                {routers.map((route, index) => <Route 
                    key={index} 
                    path={route.path} 
                    element={route.private == true ? <PrivateRouter>{route.element}</PrivateRouter> : route.element } />)}
            </Routes>
        </div>
    )
}

export default App
