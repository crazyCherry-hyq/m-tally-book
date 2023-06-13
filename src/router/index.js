import Home from "@/container/Home/index.jsx";
import Bill from "@/container/Bill/index.jsx";
import Login from "@/container/Login/index.jsx";
import User from "@/container/User/index.jsx";
import Register from "@/container/Register/index.jsx";

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/bill',
  component: Bill
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path: '/user',
  component: User
}]

export default routes
