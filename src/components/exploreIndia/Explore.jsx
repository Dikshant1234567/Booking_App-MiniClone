import "./explore.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from "../../assets/C1.jpg";
import c2 from "../../assets/C2.jpg";
import c3 from "../../assets/C3.jpg";
import c4 from "../../assets/C4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import c8 from "../../assets/c8.jpg";
import c9 from "../../assets/c9.jpg";
import c10 from "../../assets/c10.jpg";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CarouselItem = [
  {
    CImg: c1,
    name: "Gurgaon",
  },
  {
    CImg: c2,
    name: "New Delhi",
  },
  {
    CImg: c3,
    name: "Noida",
  },
  {
    CImg: c4,
    name: "Jaipur",
  },
  {
    CImg: c5,
    name: "Agra",
  },
  {
    CImg: c6,
    name: "Goa",
  },
  {
    CImg: c7,
    name: "Mumbai",
  },
  {
    CImg: c8,
    name: "Rishikesh",
  },
  {
    CImg: c9,
    name: "Manesar",
  },
  {
    CImg: c10,
    name: "Delhi NCR",
  },
];

function Explore() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/hotels");
  };
  return(
    <section className="explore">
      <h1>Explore India</h1>
      <p>These popular destinations have a lot to offer</p>
      <Carousel responsive={responsive}>
        {CarouselItem.map((item, index) => {
          return (
              <div className="carsouel-box" onClick={clickHandler} key={index}>
                <img src={item.CImg} alt="" />
                <h4>{item.name}</h4>
              </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Explore;
