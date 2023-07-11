import "./property.css";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../../assets/p1.jpeg";
import p2 from "../../assets/p2.jpeg";
import p3 from "../../assets/p3.jpeg";
import p4 from "../../assets/p4.jpeg";
import p5 from "../../assets/p5.jpeg";
import p6 from "../../assets/p6.jpeg";
import p7 from "../../assets/p7.jpeg";
import p8 from "../../assets/p8.jpeg";
import p9 from "../../assets/p9.jpeg";
import p10 from "../../assets/p10.jpeg";
import p11 from "../../assets/p11.jpeg";
import p12 from "../../assets/p12.jpeg";
import p13 from "../../assets/p13.jpeg";
import p14 from "../../assets/p14.jpeg";
import p16 from "../../assets/p16.jpeg";
import p17 from "../../assets/p17.jpeg";
import p18 from "../../assets/p18.jpeg";
import p19 from "../../assets/p19.jpeg";
import p20 from "../../assets/p20.jpeg";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CarouselItem = [
  {
    CImg: p1,
    name: "Hotels",
  },
  {
    CImg: p2,
    name: "Apartments",
  },
  {
    CImg: p3,
    name: "Resort",
  },
  {
    CImg: p4,
    name: "Carbins",
  },
  {
    CImg: p5,
    name: "Cottages",
  },
  {
    CImg: p6,
    name: "Glamping",
  },
  {
    CImg: p7,
    name: "Serviced apartments",
  },
  {
    CImg: p8,
    name: "Holidays homes",
  },
  {
    CImg: p9,
    name: "Guest houses",
  },
  {
    CImg: p10,
    name: "Hotels",
  },
  {
    CImg: p11,
    name: "Motels",
  },
  {
    CImg: p12,
    name: "B&Bs",
  },
  {
    CImg: p13,
    name: "Ryokans",
  },
  {
    CImg: p14,
    name: "Riads",
  },
  {
    CImg: p16,
    name: "Homestays",
  },
  {
    CImg: p17,
    name: "Country houses",
  },
  {
    CImg: p18,
    name: "Farm stays",
  },
  {
    CImg: p19,
    name: "Boats",
  },

  {
    CImg: p20,
    name: "Tiny houses",
  },
];

function Explore() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/hotels");
  };

  return (
    <section className="property">
      <h1>Browse by property type</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        infinite={true}
      >
        {CarouselItem.map((item , index) => {
          return (
            <>
              <div className="property-box" key={index} onClick={clickHandler}>
                <img src={item.CImg} alt="" />
                <h4>{item.name}</h4>
              </div>
            </>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Explore;
