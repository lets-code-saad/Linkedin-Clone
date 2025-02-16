import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { clearPostContent, clearSelectedImg, setPostContent, setSelectedImg, addPosts } from "../../../../../Store/Slices/selectedContent";
import "./CSS/Home.css"
import { setPostModal } from "../../../../../Store/Slices/modalSlice";

const PostModal = () => {

    // CREATING STATE FOR IMAGE AND TEXT SELECTION FOR POST
    const { selectedImg, postContent} = useSelector((state) => state.selectedContent)
    const dispatch = useDispatch()

  // MANAGING THE MODAL OPEN AND CLOSE GLOBALLY
  const { openPostModal } = useSelector((state)=> state.modalSlice)

    // Handling image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imgURL = URL.createObjectURL(file)
        if (file) {
            dispatch(setSelectedImg(imgURL))
        }
    }

    // CREATING FUNCTION FOR MANAGING THE POST
    const handlePost = () => {
dispatch(addPosts())
        dispatch(clearPostContent())
        dispatch(clearSelectedImg())
        dispatch(setPostModal(false));
    };



    return (
        <Modal open={openPostModal} onClose={() => {
            dispatch(clearPostContent())
            dispatch(clearSelectedImg())
            dispatch(setPostModal())
        }} aria-labelledby="modal-title">
            <Box className="modalPost"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2,
                    height: "90vh",
                    width: "600px",
                    overflowY: "auto",
                    overflowX: "hidden"
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box className="post-info" sx={{ display: 'flex', alignItems: "center", gap: "10px", padding: "10px", borderRadius: "10px", ":hover": { backgroundColor: "#EBEBE9", cursor: "pointer" } }}>
                        <Box>
                            <img width={45} src="/imgs/User/Profile picture.jpg" alt="" />
                        </Box>
                        <Box className="">
                            <h6 className='fs-7 d-flex align-items-center gap-1'>Muhammad Saad<iconify-icon icon="ri:arrow-down-s-fill" width={20} className="cp"></iconify-icon></h6>
                            <Typography sx={{ fontSize: "13px", marginTop: "-7px", color: "#666666" }}>Post To Anyone</Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={()=> dispatch(setPostModal(false))}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: "none", // Remove the border
                                },
                                "&:hover fieldset": {
                                    border: "none", // Ensure the border stays removed on hover
                                },
                                "&.Mui-focused fieldset": {
                                    border: "none", // Ensure the border stays removed when focused
                                },
                            },
                        }}
                        fullWidth
                        multiline
                        rows={7}
                        placeholder="What do you want to talk about?"
                        value={postContent}
                        onChange={(e) => dispatch(setPostContent(e.target.value))}
                    />
                </Box>
                {selectedImg && <Box>
                    <img src={selectedImg}
                        className="img-fluid"
                        alt="" />
                </Box>}
                {/* ICONS */}
                <Box className="d-flex align-items-center gap-3 mt-4">
                    <Box>
                        <input type="file"
                            id="mediaInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                        <label htmlFor="mediaInput">
                            <iconify-icon style={{ color: "#666666", cursor: "pointer" }} icon="ph:image" width="20" height="20"></iconify-icon>
                        </label>
                    </Box>
                    <Box>
                        <iconify-icon style={{ color: "#666666", cursor: "pointer" }} icon="cuida:calendar-outline" width="20" height="20"></iconify-icon>
                    </Box>
                    <Box>
                        <iconify-icon style={{ color: "#666666", cursor: "pointer" }} icon="stash:sun-solid" width="20" height="20"></iconify-icon>
                    </Box>
                    <Box>
                        <iconify-icon style={{ color: "#666666", cursor: "pointer" }} icon="fluent:add-28-regular" width="20" height="20"></iconify-icon>
                    </Box>

                </Box>
                {/* POST AND CANCEL BUTTONS */}
                <Divider sx={{ marginLeft: "-20px", marginRight: "-20px", marginTop: "30px" }} className='mt-3' component="" variant='fullWidth' />
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button sx={{ mr: 1, color: "#666666" }}>
                        <AccessTimeIcon />
                    </Button>
                    <Button className="text-capitalize" sx={{ borderRadius: "25px", fontSize: "15px" }} onClick={() => {
                        handlePost()
                        setTimeout(() => postContent, 5000)
                    }
                    } variant="contained" size="small"
                        disabled={!postContent.trim() && !selectedImg}>
                        Post
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default PostModal;
