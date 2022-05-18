import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/login';


function PrivateRouter({children}) {
    
    const { isLogin } = useSelector(state => state.app);

    if (isLogin == true) {
        return children
    } else {
        return <LoginPage />
    }
}

export default PrivateRouter;