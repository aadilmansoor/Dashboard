import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const DetailModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <Modal open={!!data} onClose={onClose} aria-labelledby="task-details">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" id="task-details" gutterBottom>
          Task Details
        </Typography>
        <Typography><strong>ID:</strong> {data.id}</Typography>
        <Typography><strong>Title:</strong> {data.title}</Typography>
        <Typography>
          <strong>Status:</strong>{" "}
          <Typography
            component="span"
            sx={{ color: data.completed ? "green" : "red", fontWeight: "bold" }}
          >
            {data.completed ? "Completed" : "Pending"}
          </Typography>
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ mt: 2, bgcolor: "gray" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default DetailModal;
