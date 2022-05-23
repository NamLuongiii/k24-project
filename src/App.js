import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import SearchPage from "./pages/search"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<h1>Login page</h1>}></Route>
                    <Route path="/search" element={<SearchPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
