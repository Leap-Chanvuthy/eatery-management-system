import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';
import Navbar from "./components/layouts/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
function App() {

  return (
    <BrowserRouter>
      <div>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/auth/login" element={<Login/>} /> 
          <Route path="/auth/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
