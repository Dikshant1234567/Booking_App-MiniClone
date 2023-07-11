import "./home.css";
import { Button } from "@mui/material";
import React from "react";
import Search from "../search/Search";
import TrendingDestination from "../trending-destination/TrendingDestination";
import Explore from "../exploreIndia/Explore";
import Property from "../Property/Property";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/hotels");
  };
  return (
    <>
      <section className="home">
        <h1>The joy of home wherever you go</h1>
        <h5>Discover dreamy villas, houses, cabins & more</h5>
        <Button className="home-btn" onClick={clickHandler}>
          Find Your Holiday Rentals
        </Button>
      </section>
      {/* <Search /> */}
      <TrendingDestination />
      <Explore />
      <Property />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
