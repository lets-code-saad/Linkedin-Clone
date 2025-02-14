import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

const RightHome = () => {

    // CREATING STATE FOR FOLLOW BUTTON
    const [follow, setFollow] = useState({
        internJobs: false,
        fresherJobs: false,
        weAreHiring: false,

    })

    const followFunction = (key) => {
        setFollow((prevFollow) => ({
            ...prevFollow,
            [key]: !prevFollow[key], // Toggle the state for the specific key
        }));
    }

    return (
        <div className=''>

            {/* SIDE BAR GAMES VIEW */}
            <Box sx={{ backgroundColor: "white", height: "250px" }} className="border rounded-3 p-2">
                <Box>
                    <h5>Today's puzzle games</h5>
                </Box>
                <Box sx={{marginTop:"15px"}}>
                                    <Box sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" } }} className="rightData align-items-center">
                    <Box sx={{ marginLeft: "-25px", height: "50px", display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <img className='img-fluid' width={"100px"} src="/imgs/Games/tango.png" alt="" />
                        </Box>
                        <Box sx={{ marginLeft: "-140px" }}>
                            <h6>Tango</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Harmonize the grid</Typography>
                        </Box>
                        <Box sx={{ marginTop: "8px" }}>
                            <ArrowForwardIosIcon />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer", } }} className="rightData align-items-center">
                    <Box sx={{ marginLeft: "-25px", height: "50px", display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <img className='img-fluid' width={"100px"} src="/imgs/Games/queens.png" alt="" />
                        </Box>
                        <Box sx={{ marginLeft: "-152px" }}>
                            <h6>Queens</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Crow each region</Typography>
                        </Box>
                        <Box sx={{ marginTop: "8px" }}>
                            <ArrowForwardIosIcon />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" } }} className="rightData align-items-center">
                    <Box sx={{ marginLeft: "-25px", height: "50px", display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ marginTop: "-42px" }}>
                            <img className='img-fluid' width={"100px"} src="/imgs/Games/pinpoint.png" alt="" />
                        </Box>
                        <Box sx={{ marginLeft: "-142px" }}>
                            <h6>Pinpoint</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Guess the category</Typography>
                        </Box>
                        <Box sx={{ marginTop: "8px" }}>
                            <ArrowForwardIosIcon />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" } }} className="rightData align-items-center">
                    <Box sx={{ marginLeft: "-25px", height: "50px", display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <img className='img-fluid' width={"100px"} src="/imgs/Games/crossclimb.png" alt="" />
                        </Box>
                        <Box sx={{ marginLeft: "-130px" }}>
                            <h6>Crossclimb</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Unlock the triva ladder</Typography>
                        </Box>
                        <Box sx={{ marginTop: "8px" }}>
                            <ArrowForwardIosIcon />
                        </Box>
                    </Box>
                </Box>
</Box>
            </Box>


            {/* SIDE BAR COMPANIES VIEW */}
            <Box sx={{ backgroundColor: "white", height: "405px" }} className="border rounded-3 mt-3 py-2 px-3">
                <Box className="d-flex align-items-center justify-content-between">
                    <h5>Add to your feed</h5>
                    <iconify-icon className="cp" icon="mdi:information-variant-box" width="20" height="20"></iconify-icon>
                </Box>
                <Box sx={{ ":hover": { cursor: "pointer" } }} className="rightData mt-3">
                    <Box sx={{ height: "50px", display: "flex", gap: "10px" }}>
                        <Box>
                            <img className='img-fluid border-1 rounded-pill' width={"50px"} src="/imgs/Companies/internship_jobs_for_fresher_remote_job_alert_logo.jpeg" alt="" />
                        </Box>
                        <Box sx={{}}>
                            <h6>Internship & Jobs For Fresher</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Company • Human Resources Services</Typography>
                            <Box >
                                <button onClick={() => followFunction("internJobs")} className='followBtn d-flex mt-2 align-items-center gap-1 fw-medium btn btn-white text-black text-capitalize border border-black border-1 rounded-pill'>{follow.internJobs ? <DoneIcon /> : <AddIcon />}{follow.internJobs ? "Following" : "Follow"}</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ marginTop:"65px",":hover": { cursor: "pointer" } }} className="rightData align-items-center">
                    <Box sx={{ height: "50px", display: "flex", gap: "10px" }}>
                        <Box>
                            <img className='img-fluid border-1 rounded-pill' width={"50px"} src="/imgs/Companies/we_are_hiring_freshers_experienced_logo.jpeg" alt="" />
                        </Box>
                        <Box sx={{}}>
                            <h6>We Are Hiring Freshers & Experienced</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Company • Software Development</Typography>
                            <Box >
                                <button onClick={() => followFunction("fresherJobs")} className='followBtn d-flex mt-2 align-items-center gap-1 fw-medium btn btn-white text-black text-capitalize border border-black border-1 rounded-pill'>{follow.fresherJobs? <DoneIcon/> : <AddIcon />}{follow.fresherJobs ? "Following" : "Follow"}</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ ":hover": { cursor: "pointer" }, marginTop:"65px" }} className="rightData align-items-center">
                    <Box sx={{ height: "50px", display: "flex", gap: "10px" }}>
                        <Box>
                            <img className='img-fluid border-1 rounded-pill' width={"50px"} src="/imgs/Companies/quick_interns_logo.jpeg" alt="" />
                        </Box>
                        <Box sx={{}}>
                            <h6>Fresher jobs and hiring Alerts</h6>
                            <Typography sx={{ marginTop: "-7px", fontSize: "13px", color: "#666666" }}>Company • IT Services and IT Consulting</Typography>
                            <Box >
                                <button onClick={() => followFunction("weAreHiring")} className='followBtn d-flex mt-2 align-items-center gap-1 fw-medium btn btn-white text-black text-capitalize border border-black border-1 rounded-pill'>{follow.weAreHiring? <DoneIcon/> : <AddIcon />}{follow.weAreHiring ? "Following" : "Follow"}</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </div>
    )
}

export default RightHome