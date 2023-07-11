import React, { useState } from "react";
import { Button } from "@mui/material";
import "./navbar.css";
import FlightIcon from "@mui/icons-material/Flight";
import BedIcon from "@mui/icons-material/Bed";
import PublicIcon from "@mui/icons-material/Public";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="navbar">
      <div className="navbar-conatiner">
        <MenuIcon className="ham-menu" onClick={() => setOpenMenu(true)} />
        <h1 onClick={() => navigate("/")}>Booking.com</h1>
        <nav>
          {openMenu && (
            <CloseIcon
              className="closeMenu"
              onClick={() => setOpenMenu(false)}
            />
          )}
          <ul className={openMenu ? "activeMenu" : ""}>
            <li>
              <Button variant="contained" className="nav-button">
                Stays <BedIcon className="nav-icon" />
              </Button>
            </li>
            <li>
              <Button variant="contained" className="nav-button">
                Flight <FlightIcon className="nav-icon" />
              </Button>
            </li>
            <li>
              <Button variant="contained" className="nav-button">
                flight+hotels <PublicIcon className="nav-icon" />
              </Button>
            </li>
            <li>
              <Button variant="contained" className="nav-button">
                Car rentals <DirectionsCarIcon className="nav-icon" />
              </Button>
            </li>
            <li>
              <Button variant="contained" className="nav-button">
                Attractions <AcUnitIcon className="nav-icon" />
              </Button>
            </li>
            <li>
              <Button variant="contained" className="nav-button">
                Airport Taxis <TaxiAlertIcon className="nav-icon" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
