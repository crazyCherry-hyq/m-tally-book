import { Route, Routes } from "react-router-dom";
import routes from "@/router/index.js";
import NavBar from "@/components/Layout/NavBar";
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="page">
        <Routes>
          {routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)}
        </Routes>
      </div>
      <NavBar />
    </div>
  )
}

export default App
