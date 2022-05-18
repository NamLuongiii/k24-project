import Homepage from "./pages/homepage";
import LoginPage from "./pages/login";
import UserPage from "./pages/user";

const routers = [
    {
        path: '/',
        element: <Homepage />,
        private: false,
    },
    {
        path: '/login',
        element: <LoginPage />,
        private: false,
    },
    {
        path: '/user',
        element: <UserPage />,
        private: true,
    },
]

export default routers;