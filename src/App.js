import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomePage/Home";
import NavBar from "./Pages/Shared/Header/NavBar";

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
