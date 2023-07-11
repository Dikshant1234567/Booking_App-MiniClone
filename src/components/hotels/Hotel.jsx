import React, { useState } from "react";
import "./hotel.css";
import StarIcon from "@mui/icons-material/Star";
import {  useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
import h1 from "../../assets/h1.webp";
import h2 from "../../assets/h2.webp";
import h3 from "../../assets/h3.webp";
import h4 from "../../assets/h4.webp";
import h5 from "../../assets/h5.webp";
import h6 from "../../assets/h6.webp";
import h7 from "../../assets/h7.webp";
import h8 from "../../assets/h8.webp";
import h9 from "../../assets/h9.webp";
import h10 from "../../assets/h10.webp";

const hoteDes = [
  {
    CImg: h1,
    name: "The Delhi Prime",
    des: "Attractively located in the centre of New Delhi, The Prime Delhi features air-conditioned rooms with free WiFi, free private parking and room service",
  },
  {
    CImg: h2,
    name: "The Hotel Olive New Delhi",
    des: "Situated in New Delhi, within 12 km of Qutub Minar and 13 km of MG Road, Hotel Olive New Delhi features accommodation with a shared lounge and as well as free private parking for guests who drive.",
  },
  {
    CImg: h3,
    name: "Hotel Triple Tree- New Delhi",
    des: "Ideally located in New Delhi, Hotel Tripple Tree - Karol Bagh offers air-conditioned rooms with free WiFi, free private parking and room service.",
  },
  {
    CImg: h4,
    name: "The Dakha Internation-Bengaluru",
    des: "Offering a restaurant, HOTEL DAKHA INTERNATIONAL - Karol Bagh, New Delhi is located in New Delhi. Free Wi-Fi access and a 24-hour front desk are available.",
  },
  {
    CImg: h5,
    name: "Skon Boutique by Orion hotel",
    des: "Skon Boutique by Orion Hotels is located in New Delhi’s Lajpat Nagar Area, about 15 minutes’ drive from The Connaught Place. Modern and stylish, it offers a restaurant, free Wi-Fi and free parking.",
  },
  {
    CImg: h6,
    name: "The Singh Empire",
    des: "Hotel Singh Empire DX features 24-hour room service and modern rooms with free WiFi. It is 14 km from New Delhi International Airport and 600 metres from New Delhi Railway Station.",
  },
  {
    CImg: h7,
    name: "The Claytron",
    des: "Located in New Delhi, 12 km from Qutub Minar, Hotel Clayton Near IGI Airport Delhi provides accommodation with a garden, free private parking, a shared lounge and a restaurant.",
  },
  {
    CImg: h8,
    name: "Apra B & B At Delhi Airport ",
    des: "Apra B & B At Delhi Airport is located in New Delhi and provides accommodation with a shared lounge and free WiFi, 12 km from Qutub Minar and 13 km from MG Road.",
  },
  {
    CImg: h9,
    name: "Hotel Decent Suits",
    des: "Located in New Delhi, within 12 km of Qutub Minar and 13 km of MG Road, Hotel Decent Suites - Delhi Airport provides accommodation with a terrace and free WiFi as well as free private parking for...",
  },
  {
    CImg: h10,
    name: " The Grand Tashree ",
    des: "Featuring 3-star accommodation, The Grand Tashree at Delhi Airport is situated in New Delhi, 10 km from Qutub Minar and 12 km from MG Road.",
  },
];
function Hotel() {
  const navigate = useNavigate();

  const RoomBookHandler = (hotelData, index) => {
    console.log("clicked");
    navigate("/booking", {
      state: {
        roomData: hotelData,
      },
    });
  };


  return (
    <>
      <section className="hotels">
        {hoteDes.map((hotelData, index) => {
          return (
            <div className="hotel-container" key={index}>
              <img src={hotelData.CImg} alt="" className="hotel-img" />
              <div className="hotel-info">
                <h1>{hotelData.name}</h1>
                <p>{hotelData.des}</p>
                <div className="rating">
                  <label>Ratings: </label>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                </div>
              </div>
              <div className="book-btn">
                <Button
                  variant="contained"
                  onClick={() => RoomBookHandler(hotelData, index)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default Hotel;
