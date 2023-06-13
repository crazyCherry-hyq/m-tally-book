import Home from "@/container/Home/index.jsx";
import Bill from "@/container/Bill/index.jsx";
import Login from "@/container/Login/index.jsx";
import User from "@/container/User/index.jsx";
import Register from "@/container/Register/index.jsx";

const routes = [{
  path: '/',
  shouldShowNavBar: true,
  component: Home
}, {
  path: '/bill',
  shouldShowNavBar: true,
  component: Bill
}, {
  path: '/login',
  shouldShowNavBar: false,
  component: Login
}, {
  path: '/register',
  shouldShowNavBar: false,
  component: Register
}, {
  path: '/user',
  shouldShowNavBar: true,
  component: User
}]

export default routes
