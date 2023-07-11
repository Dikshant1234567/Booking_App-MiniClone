import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Hotel from "./components/hotels/Hotel";
import BookingConfirm from "./components/BookingConfirm/BookingConfirm";
import "./components/responsive/mobile.css"
import "./components/responsive/tablet.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<Hotel />}></Route>
        <Route path="/booking" element={<BookingConfirm/>}/>
      </Routes>

     
    </>
  );
}

export default App;
