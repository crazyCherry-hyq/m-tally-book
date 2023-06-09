import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "@/router/index.js";
import NavBar from "@/components/layout/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  )
}

export default App
