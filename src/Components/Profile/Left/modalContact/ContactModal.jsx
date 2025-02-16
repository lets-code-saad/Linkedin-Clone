import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import "./CSS/ModalContact.css"
import { setContactModal } from "../../../Store/Slices/modalSlice";
import { Link } from "react-router-dom";
import { InsertEmoticon } from "@mui/icons-material";

const ContactModal = () => {

    const { openContactModal } = useSelector((state) => state.modalSlice)
const dispatch = useDispatch()

    // MANAGING THE MULTIPLE CONTACT DETAILS TO REDUCE THE REPITION OF CODE
    const contacts = [
        { id: 1, name: "Your Profile", icon:"uil:linkedin", link:"https://saad78"},
        { id: 2, name: "Website", icon:"tdesign:link", link:"https:www.google.com"},
        { id: 3, name: "Phone", icon:"line-md:phone-filled", link:"03201839399"},
        { id: 4, name: "Address", icon:"tdesign:location-filled", link:"Layyah, Punjab Pakistan"},
        { id: 5, name: "Email", icon:"ic:outline-email", link:"saadabbas594@gmail.com"},
    ]

    return (
        <Modal open={openContactModal} onClose={() => 
            dispatch(setContactModal(false))
        
        } aria-labelledby="modal-title">
            <Box className="modalContact"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2,
                    height: "85vh",
                    width: "500px",
                    overflowY: "auto",
                    overflowX: "hidden"
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box className="post-info" sx={{ display: 'flex', alignItems: "center"}}>
                            <h6 className='fs-7 d-flex align-items-center gap-1'>Muhammad Saad</h6>
                    </Box>
                    <IconButton onClick={() => dispatch(setContactModal(false))}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider component="" fullWidth />
                {/* CONTACT INFO & EDIT ICON */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box className="post-info" sx={{ display: 'flex', justifyContent:"space-between", alignItems: "center"}}>
                            <h6 style={{color:"#666666"}} className='fs-7 d-flex align-items-center gap-1'>Contact Info</h6>
                    </Box>
                    <Box
                        className="border-0 rounded-pill"
                        sx={{padding: "10px",color:"#666666", ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" } }}
                        onClick={() => dispatch(setContactModal(false))}>
                            <iconify-icon icon="ic:outline-edit" width="24" height="24"></iconify-icon>
                    </Box>
                </Box>
                {/* CONTACT DETAILS */}
                <Box className="contact-details d-flex flex-column gap-2">
                    {/* CONTACT 1 */}
                    {contacts.map((contact) =>  (
                        <Box display="flex" alignItems="center" gap="10px" >
                            <Box
                                className="border-0 rounded-pill"
                                sx={{ color: "black" }}
                                onClick={() => dispatch(setContactModal(false))}>
                                <iconify-icon icon={contact.icon} width="24" height="24"></iconify-icon>
                            </Box>
                            <Box className="post-info" sx={{ display: 'flex', gap: "12px" }}>
                                <h6 style={{ color: "black" }} className='fs-7 d-flex flex-column gap-1'>{contact.name}
                                    {/* LINKS */}
                                    <Link className="text-decoration-none">
                                        <Typography variant="span" sx={{ color: "#4C8ABB", marginTop: "-5px" }} className='fs-7 d-flex align-items-center gap-1'>{contact.link}</Typography>
                                    </Link>

                                </h6>
                            </Box>
                        </Box>
                    )
                    

                     )}
                            <Box className="post-info" sx={{ display: 'flex', gap: "12px", marginTop:"20px" }}>
                        <h6 style={{ color: "black" }} className='fs-7 d-flex flex-column gap-1'>Enhance your profile with AI-powered suggestions

                                    {/* LINKS */}
                                    <Link className="text-decoration-none">
                                <Typography sx={{ color: "#666666", marginTop: "-5px" }} className='fs-7 d-flex align-items-center gap-1'>Members can receive up to 2x as many opportunities with a stronger profile.</Typography>
                                    </Link>

                                </h6>
                            </Box>
 
                    
                    </Box>
                </Box>
                
        </Modal>
    );
};

export default ContactModal;
