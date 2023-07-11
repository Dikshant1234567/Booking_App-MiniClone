import { useLocation, useNavigate } from "react-router-dom";
import "./confirm.css";

import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Button, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  p: 4,
};

function BookingConfirm() {
  const { state } = useLocation();
  const Data = state.roomData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <section className="booking">
        <div className="confirm-container">
          <img src={Data.CImg} alt="room-image" />
          <div className="room-des">
            <h1>{Data.name}</h1>
            <h5>{Data.des}</h5>
            <Button
              className="book-btn"
              variant="contained"
              onClick={handleOpen}
            >
              Book Now
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5">
                  Congratulation🎉
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your Room is Booked Sucessfully🙌.
                </Typography>
                <Typography id="modal-modal-description">
                  Thank You❤️
                </Typography>
                <Button
                  onClick={() => {
                    handleClose();
                    navigate("/");
                  }}
                  variant="contained"
                  className="close-btn"
                >
                  Close
                </Button>
              </Box>
            </Modal>
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingConfirm;
