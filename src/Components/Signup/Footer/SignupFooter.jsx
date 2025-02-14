import { Box, Typography } from '@mui/material'
import React from 'react'

const SignupFooter = () => {

// FOOTER SECTION LINKS
const footerLinks = [
    { id: 1, name: "Accessibility" },
    { id: 2, name: "User Agreement" },
    { id: 3, name: "Privacy Policy" },
    { id: 4, name: "Cookie Policy" },
    { id: 5, name: "Copyright Policy" },
    { id: 6, name: "Brand Policy" },
    { id: 7, name: "Guest Controls" },
    { id: 8, name: "Community Guidelines" }
]

    return (
        <>
            {/* Help Section */}
            <Typography sx={{ color: "#373637", fontSize: "14px", marginTop: "20px", textAlign: "center" }}>Looking to create a page for a business? <span className='text-website fw-medium cp'>Get Help</span></Typography>

            {/* Footer Section */}
            <Box sx={{ fontSize: "14px", backgroundColor: "white", paddingBottom:"20px", paddingTop:"5px", marginTop:"20px" }}>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <div className="logo">
                        <img width={60} className='img-fluid cp' src="/imgs/Logo/1656997251linkedin-logo-black.png" alt="" />
                    </div>
                    <span className='text-body-secondary'>&copy;2025</span>

{/* MAPPING THE LINKS TO MAKE THE CODE CLEAN */}

                    {footerLinks.map((links)=>{
                        return (
                            <Typography key={links.id} sx={{ color: "373637", fontWeight:"500", fontSize: "13px", cursor:"pointer", ":hover":{textDecoration:"underline", color:"bg-website"} }}>{links.name}</Typography>
                        )
                    })}
                </div>
            </Box>
        </>
    )
}

export default SignupFooter
