import Home from "@/container/Home/index.jsx";
import Bill from "@/container/Bill/index.jsx";
import Login from "@/container/Login/index.jsx";

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/bill',
  component: Bill
}, {
  path: '/login',
  component: Login
}]

export default routes
