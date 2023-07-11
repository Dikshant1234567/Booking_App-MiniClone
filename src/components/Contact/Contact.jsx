import React, { useState } from "react";
import "./contact.css";
import { Button, Box, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  boxShadow: 24,
  p: 4,
};

function Contact() {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <section className="contact">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="contact-item">
        <input
          type="email"
          placeholder="Enter your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button
          className="subcribe-btn"
          variant="contained"
          onClick={handleOpen}
        >
          SUSCRIBE
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {userEmail ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             <span style={{color: 'red' , fontSize: 20}}>Congratulation</span>  {userEmail} 🎉!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Sucessfully Suscribed.
            </Typography>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please fill your Email..!
            </Typography>
          </Box>
        )}
      </Modal>
    </section>
  );
}

export default Contact;
