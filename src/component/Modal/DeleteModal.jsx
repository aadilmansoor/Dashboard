import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";


import { enqueueSnackbar } from "notistack";
import { setDeleteModal } from "../../Redux/slice/sharedSlice";
import { apiService } from "../ApiServices/apiService";


const DeleteModal = () => {
    const dispatch = useDispatch();
    const { deleteModal } = useSelector((state) => state.shared);

    const closeModal = () => {
        dispatch(setDeleteModal({ open: false, id: "" }));
    };

    const handleDelete = async () => {
        if (deleteModal.id) {
            try {
                await apiService.deleteSection(deleteModal.id);
                console.log("Section deleted successfully.");
                enqueueSnackbar("Section deleted successfully!", {
                    variant: "success",
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                });
                closeModal();
            } catch (error) {
                console.error("Error while deleting the section:", error);
                enqueueSnackbar("An error occurred while deleting the section. Please try again.", {
                    variant: "error",
                    autoHideDuration: 3000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                });
            }
        } else {
            console.error("Deletion failed: No valid section ID provided.");
            enqueueSnackbar("Deletion failed: No valid section ID provided.", {
                variant: "error",
                autoHideDuration: 3000,
                anchorOrigin: { vertical: "top", horizontal: "right" },
            });
        }
    };
    

    return (
        <Dialog
            open={deleteModal.open}
            onClose={closeModal}
            aria-labelledby="delete-dialog"
            sx={{
                "& .MuiDialog-paper": {
                    width: "450px",
                    height: "250px",
                },
            }}
        >
            <DialogTitle id="delete-dialog">Delete Confirmation</DialogTitle>
            <DialogContent className="flex items-center justify-center">
                Are you sure you want to delete this item?
            </DialogContent>
            <DialogActions
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "70px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "white",
                }}
            >
                <Button onClick={handleDelete} color="error" variant="contained">
                    Yes
                </Button>
                <Button onClick={closeModal} color="primary" variant="contained">
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DeleteModal.propTypes = {
    module: PropTypes.string.isRequired,
};

export default DeleteModal;
