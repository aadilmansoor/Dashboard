import { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setOpenCustomModal, setSelectedData } from "../../Redux/slice/sharedSlice";
import { apiService } from "../ApiServices/apiService";
import { enqueueSnackbar } from "notistack";

const UserModal = ({ task }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.shared.openCustomModal);
    const selectedData = useSelector((state) => state.shared.selectedData);

    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [titleError, setTitleError] = useState(""); 

    useEffect(() => {
        if (isOpen) {
            if (selectedData?.title) {
                setTitle(selectedData.title);
                setCompleted(selectedData.completed);
            } else {
                setTitle("");
                setCompleted(false);
            }
            setTitleError(""); 
        }
    }, [isOpen, selectedData]);

    const handleClose = () => {
        dispatch(setSelectedData({}));
        dispatch(setOpenCustomModal(false));
        setTitleError(""); 
    };

    const handleSubmit = async () => {
        if (!title.trim()) {
            setTitleError("Title is required");
            return;
        }

        const taskData = { title, completed };

        try {
            if (selectedData?.id) {
                await apiService.updateSectionList(selectedData.id, taskData);
                enqueueSnackbar("Updated successfully!", {
                    variant: "success",
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                });
            } else {
                await apiService.postSectionList(taskData);
                enqueueSnackbar("Saved successfully!", {
                    variant: "success",
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                });
            }

            handleClose();
        } catch (error) {
            console.error("Failed to submit data:", error);
            enqueueSnackbar("Failed to save. Please try again.", {
                variant: "error",
                autoHideDuration: 3000,
                anchorOrigin: { vertical: "top", horizontal: "right" },
            });
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            sx={{
                "& .MuiPaper-root": {
                    borderRadius: "20px",
                    height: "50dvh",
                    position: "relative",
                    overflowX: "hidden",
                },
            }}
        >
            <DialogTitle>{selectedData?.id ? "Edit Task" : "Add Task"}</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Task Title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (titleError) setTitleError(""); 
                    }}
                    margin="dense"
                    error={!!titleError}
                    helperText={titleError}
                />
                <FormControlLabel
                    control={<Checkbox checked={completed} onChange={() => setCompleted(!completed)} />}
                    label="Completed"
                />
            </DialogContent>
            <DialogActions
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    {selectedData?.id ? "Update" : "Save"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserModal;
