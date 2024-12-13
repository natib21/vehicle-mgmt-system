import React from "react";
import { Modal, Box } from "@mui/material";

const ModalUi = ({ children, open, handleClose }) => {
  const handleCloseModal = () => {
    handleClose(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "90%",
          maxWidth: 500,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalUi;
