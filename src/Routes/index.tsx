import {Route,Routes} from "react-router-dom"
import Home from "./Home"


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/hello" element={<div>Hello</div>} />
    </Routes>
  )
}

export default Router