import React from "react";
import "./trendingdesination.css";
import Newdelhi from "../../assets/newdelhi.jpg";
import Banglore from "../../assets/banglore.jpg";
import Mumbai from "../../assets/Mumbai.jpg";
import Chennai from "../../assets/Chennai.jpg";
import Manali from "../../assets/Manali.jpg";
import { useNavigate } from "react-router-dom";

function TrendingDestination() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/hotels");
  };
  return (
    <section className="trendingDest">
      <div className="trendingDest-container">
        <h1>Trending Destination</h1>
        <p>Most popular choices for travellers from India</p>
        <div className="img-container">
          <div className="container container1">
            <div className="trending-img" onClick={clickHandler}>
              <h1>New Delhi </h1>
              <img src={Newdelhi} alt="" />
            </div>
            <div className="trending-img" onClick={clickHandler}>
              <h1>Banglore</h1>
              <img src={Banglore} alt="" />
            </div>
          </div>
          <div className="container container2">
            <div className="trending-img" onClick={clickHandler}>
              <h1>Mumbai</h1>
              <img src={Mumbai} alt="" />
            </div>
            <div className="trending-img" onClick={clickHandler}>
              <h1>Chennai</h1>
              <img src={Chennai} alt="" />
            </div>
            <div className="trending-img" onClick={clickHandler}>
              <h1>Manali</h1>
              <img src={Manali} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingDestination;
