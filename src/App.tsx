import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
  )
}

export default App;
