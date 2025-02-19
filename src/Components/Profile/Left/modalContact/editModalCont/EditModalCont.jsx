import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton, Divider, FormControl, OutlinedInput } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/ModalContact.css"
import { Link, useNavigate } from "react-router-dom";
import { setContactModal, setOpenEditContModal } from "../../../../Store/Slices/modalSlice";
import { FiberPin } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import { setContactAddress, setContactEmail, setContactLang, setContactNo, setContactProfile, setContactWebsite } from "../../../../Store/Slices/contactInfoSlice";

const EditModalCont = () => {

    const { openEditModalCont, openEditContModal } = useSelector((state) => state.modalSlice)
    const dispatch = useDispatch()

    // CREATING GLOBAL STATE TO MANAGE THE CONTACT INPUTS
    const { contactProfile, contactEmail, contactWebsite, contactAddress, contactNo, contactLanguage } = useSelector((state) => state.contactInfoSlice)

    // USENAVIGATE
    const navigate = useNavigate()

    // USING HOOK FORM TO EDIT INPUTS FORM HANDLINGS
    // FORM HANDLING
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            link: '',
        }
    });
    const onSubmit = (e) => {
        // e.preventDefault() 
        // Update Redux state (Example)
        dispatch(setContactEmail(contactDetails.email))
        dispatch(setContactProfile(contactDetails.profile))
        dispatch(setContactWebsite(contactDetails.website))
        dispatch(setContactNo(contactDetails.phone))
        dispatch(setContactAddress(contactDetails.address))
        dispatch(setContactLang(contactDetails.language))
        // Dispatch other values as needed
        dispatch(setOpenEditContModal(false))
        dispatch(setContactModal(false))
        console.log(e, "Contact Details")
    }

    // MANAGING THE CODE REPITION 
    const contactEditDetails = [
        { id: 1, value: contactProfile , label:"Profile"},
        { id: 2, value: contactEmail , label:"Email"},
        { id: 3, value: contactWebsite , label:"Website"},
        { id: 4, value: contactAddress , label:"Address"},
        { id: 5, value: contactNo , label:"Phone"},
        { id: 6, value: contactLanguage , label:"Language"},
    ]

    // Local state to hold input values
    const [contactDetails, setContactDetails] = useState({
        profile: "",
        email: "",
        website: "",
        address: "",
        phone: "",
        language: ""
    });

    useEffect(() => {
        setContactDetails({
            profile: contactProfile,
            email: contactEmail,
            website: contactWebsite,
            address: contactAddress,
            phone: contactNo,
            language: contactLanguage
        })
    }, [contactProfile, contactEmail, contactWebsite, contactAddress, contactNo, contactLanguage])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Modal open={openEditContModal} onClose={() => {

            dispatch(setOpenEditContModal(false))
            dispatch(setContactModal(false))
        }
        }
            aria-labelledby="modal-title">
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
                    width: "700px",
                    overflowY: "auto",
                    overflowX: "hidden"
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box className="post-info" sx={{ display: 'flex', alignItems: "center" }}>
                        <h6 className='fs-7 d-flex align-items-center gap-1'>Muhammad Saad</h6>
                    </Box>
                    <IconButton onClick={() => {
                        dispatch(setOpenEditContModal(false))
                        dispatch(setContactModal(false))
                    }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ marginLeft: "-20px", marginRight: "-20px" }} className='' component="" variant='fullWidth' />


                {/* CONTACT EDIT INPUTS & EDIT ICON */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className="d-flex flex-column align-items-center gap-3">
                    {contactEditDetails.map((contact,key) => (
                            <Controller
                                name={contact.label}
                                control={control}
                                render={({ field }) => (
                                    <FormControl fullWidth>
                                        <Typography sx={{ color: '#666666' }} className="fw-medium fs-6 mb-1 mt-1">{contact.label}</Typography>
                                        <OutlinedInput
                                            {...field}
                                            key={key}
                                            name={contact.label.toLowerCase()} // Ensure state keys match
                                            size="small"
                                            color='black'
                                            value={contactDetails[contact.label.toLowerCase()] || ""}

                                            onChange={handleInputChange}
                                            sx={{
                                                borderRadius: "5px", height: "32px",
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover': {
                                                        cursor: 'pointer', // Pointer cursor on hover
                                                    }
                                                },
                                                border: "1px solid #666666", '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Removes the outline
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', cursor: "pointer"// Removes outline on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    // Removes outline when focused
                                                },
                                            }}
                                        />
                                    </FormControl>
                                )}
                            />
                        ))}
                        </Box>

                    {/* POST AND CANCEL BUTTONS */}
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                            type="submit"
                            className="text-capitalize"
                            sx={{ borderRadius: "25px", fontSize: "15px" }}
                            variant="contained"
                            size="small"
                        >
                            Save
                        </Button>
                    </Box>
</form>

            </Box>

        </Modal>
    );
};

export default EditModalCont;

