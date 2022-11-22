import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About from "./Pages/About/About";
import AppoinmentPage from "./Pages/AppoinmentPage/AppoinmentPage";
import Login from "./Pages/Authentication/Login/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import SingUp from "./Pages/Authentication/SingUp/SingUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/User/MyAppointments ";
import MyHistory from "./Pages/Dashboard/User/MyHistory";
import MyReview from "./Pages/Dashboard/User/MyReview";
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
        <Route path="/appoinment" element={
          <RequireAuth>
            <AppoinmentPage />
          </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
        {/* <Route path="/reviews" element={<}></Route> */}
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SingUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
