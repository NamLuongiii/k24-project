import axios from "axios";
import React, { useState } from "react"

import { useNavigate } from "react-router-dom";

function LoginPage(props) {
    let navigate = useNavigate();

    const [payload, setPayload] = useState({
        username: "",
        password: "",
    })


    const login = async () => {
        try {
            const endpoint = 'https://k24-server-1.herokuapp.com/user/login';
            
            const {data} = await axios({
                method: 'post',
                url: endpoint,
                data: {
                    "phone": payload.username,
                    "password": payload.password
                },
            });

            localStorage.setItem('token', data.token)

            navigate('/');

        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div>
            <h1>LoginPage</h1>

            <input
                type="text"
                value={payload.username}
                onChange={(e) => {
                    setPayload({
                        ...payload,
                        username: e.target.value,
                    })
                }}
            />

            <input
                type="text"
                value={payload.password}
                onChange={(e) => {
                    setPayload({
                        ...payload,
                        password: e.target.value,
                    })
                }}
            />

            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginPage
