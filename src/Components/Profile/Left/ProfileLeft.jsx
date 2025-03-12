import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ProfileLeft.css"
import { setContactModal } from '../../Store/Slices/modalSlice'
import ContactModal from './modalContact/ContactModal'
import MoreVertIcon from "@mui/icons-material/MoreVert";


const ProfileLeft = () => {
    // MANAGIN THE DYNAMIC IMAGE CHANGE
    const [selectedProfileImg, setselectedProfileImg] = useState("")
    const [selectedCoverImg, setselectedCoverImg] = useState("")

    const { openContactModal } = useSelector((state) => state.modalSlice)
    const dispatch = useDispatch()

    // managing the more options button
    const [openOptions, setOpenOptions] = useState(null)


    const handleProfileImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            const profileImgUrl = URL.createObjectURL(file)
            setselectedProfileImg(profileImgUrl)
        }
    }
    const handleCoverImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            const coverImgUrl = URL.createObjectURL(file)
            setselectedCoverImg(coverImgUrl)
        }
    }

    const handleClick = (e) => {
        setOpenOptions(e.currentTarget)
    }
    const handleClose = () => {
        setOpenOptions(null)
    }


    return (
        <div>
            {/* SIDEBAR PROFILE VIEW */}
            <Box sx={{ backgroundColor: "white", position: "relative" }} className="leftProfilePage border rounded-3">

                {/* COVER PHOTO */}
                <Box className="coverPagePhoto">
                    <input type="file"
                        onChange={handleCoverImg}
                        style={{ display: "none" }}
                        accept='image/*'
                        id='coverImgUpdate'
                    />
                    <label className='w-100' htmlFor="coverImgUpdate">
                        <img className='border-0 rounded-top-2 cp'
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            src={selectedCoverImg ? selectedCoverImg : `/imgs/User/Linkedin Cover Photo Design.png`} alt="Cover" />
                    </label>
                </Box>

                {/* PROFILE PHOTO */}
                <Box sx={{ padding: "20px", position: "absolute", bottom: "35px" }}>
                    <Box className="profilePagePhoto">
                        <input type="file"
                            onChange={handleProfileImg}
                            style={{ display: "none" }}
                            accept='image*/'
                            id='profileImgUpdate'
                        />
                        <label htmlFor="profileImgUpdate">
                            <img
                                className='img-fluid border border-2 border-white rounded-pill cp'
                                width={140}
                                src={selectedProfileImg ? selectedProfileImg : `/imgs/User/Profile picture.jpg`}
                                alt="Profile" />
                        </label>
                    </Box>

                    {/* NAME & EDIT ICON */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mt: 2 }}>

                        {/* LEFT SIDE: Name & Title */}
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Muhammad Saad</Typography>
                            <Typography sx={{ fontSize: "13px", color: "#666666" }}>
                                Frontend Web Developer | HTML | CSS | Javascript | Bootstrap | ReactJs
                            </Typography>
                        </Box>

                        {/* RIGHT SIDE: Edit Icon */}
                        <Box className="border-0 rounded-pill" sx={{ position: "absolute", right: "-170px", top: "110px", padding: "10px", ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" } }}>
                            <iconify-icon icon="ic:outline-edit" width="24" height="24"></iconify-icon>
                        </Box>
                        <Box className="educationDetail" sx={{ position: "absolute", right: "-120px", top: "150px" }}>
                            <Box className="d-flex align-items-center gap-1">
                                <img style={{ width: "40px" }} src="/imgs/General/UL New Logo.png" alt="" />
                                <Typography variant='h6' sx={{ fontWeight: "medium", fontSize: "14px", color: "#666666" }}>
                                    University Of Layyah
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* LOCATION & CONTACT INFO */}
                    <Typography sx={{ fontSize: "13px", display: "inline", gap: "15px", fontWeight: "semibold", color: "#666666" }}>
                        Layyah, Punjab Pakistan

                        {/* CONTACT INFO MODAL BUTTON */}

                        <Button
                            onClick={() => dispatch(setContactModal(true))}
                            size='small'
                            sx={{
                                ":hover":
                                {
                                    backgroundColor: "#D0E8FF",
                                    borderRadius: "13px"
                                }, fontSize: "13px"
                            }} className='text-website cp text-capitalize fw-semibold'>Contact Info</Button>
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }} className='text-website cp text-capitalize fw-semibold'>500+ Connections</Typography>

                    {/* BUTTONS */}
                    <Box className="d-flex flex-wrap align-items-center gap-2 mt-3">
                        <Button
                            sx={{ ":hover": { backgroundColor: "#0865BD" }, color: "#FFFFFF", borderRadius: "23px", fontSize: "13px" }}
                            className='text-white cp text-capitalize fw-semibold'
                            variant='contained'
                            size='small'
                        >
                            Open To
                        </Button>
                        <Button
                            sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                            className='text-website cp text-capitalize fw-semibold'
                            variant='outlined'
                            size='small'
                        >
                            Add Profile Section
                        </Button>
                        <Box className="hidingBtns">
                            <Button
                                sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                                className='text-website cp text-capitalize fw-semibold'
                                variant='outlined'
                                size='small'
                            >
                                Enhance Profile
                            </Button>
                            <Button
                                sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                                className='text-website cp text-capitalize fw-semibold'
                                variant='outlined'
                                size='small'
                            >
                                Add Profile Section
                            </Button>
                        </Box>

                        {/* More Options Button For Small Screen */}
                        <Button
                            onClick={handleClick}
                            sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px", position: "relative" }}
                            className='moreOptionsBtn text-website cp text-capitalize fw-semibold'
                            variant='outlined'
                            size='small'
                        >
                            <iconify-icon icon="mi:options-horizontal" width="24" height="24"></iconify-icon>
                        </Button>

                        
                        {/* Dropdown Menu with Styled Buttons */}
                        <Menu
                            className='dropDownMenu'
                            sx={{ position: "absolute", top: "-40px", left: "150px", }}
                            open={Boolean(openOptions)} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                <Button
                                    sx={{
                                        ":hover": { backgroundColor: "#D0E8FF" },
                                        color: "#0865BD",
                                        borderRadius: "23px",
                                        fontSize: "13px",
                                    }}
                                    variant="outlined"
                                    size="small"
                                >
                                    Enhance Profile
                                </Button>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <Button
                                    sx={{
                                        ":hover": { backgroundColor: "#D0E8FF" },
                                        color: "#0865BD",
                                        borderRadius: "23px",
                                        fontSize: "13px",
                                    }}
                                    variant="outlined"
                                    size="small"
                                >
                                    Add Profile Section
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>



                    <ContactModal open={openContactModal} handleClose={() => dispatch(setContactModal(false))} />
                </Box>
            </Box>
        </div>
    )
}

export default ProfileLeft
