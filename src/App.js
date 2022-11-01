import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AppoinmentPage from "./Pages/AppoinmentPage/AppoinmentPage";
import Login from "./Pages/Authentication/Login/Login";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/HomePage/HomePage";
import NavBar from "./Pages/Shared/Header/NavBar";


function App() {

  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appoinment" element={<AppoinmentPage />}></Route>
        {/* <Route path="/reviews" element={<}></Route> */}
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
