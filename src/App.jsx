import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';
import Navbar from "./components/layouts/Navbar";
function App() {

  return (
    <BrowserRouter>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/user" element={<User/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
