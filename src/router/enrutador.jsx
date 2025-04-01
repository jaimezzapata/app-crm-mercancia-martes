import Login from '../pages/Login'
import Home from '../Home'
export let enrutador = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/',
        element: <Login />
    },

]
