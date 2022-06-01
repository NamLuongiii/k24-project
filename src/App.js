import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRouter from "./components/PrivateRouter";
import { removeUser, setUser } from "./redux/_user";
import routers from "./routers/router";

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.userReducer);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    console.log('runnn', token);
    if (token) {
      getUser();
    } else {
      const action = removeUser();
      dispatch(action);
    }
  }, [token]);

  const getUser = async () => {
    try {
      const endpoint = "https://k24-server-1.herokuapp.com/user";

      const res = await axios({
        url: endpoint,
        method: "get",
        headers: { token: localStorage.getItem("token") },
      });

      const action = setUser(res.data);
      dispatch(action);


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routers.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.private === true ? (
                  <PrivateRouter>{route.element}</PrivateRouter>
                ) : (
                  route.element
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
