import { Box, Button, CardMedia, InputBase, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./CreatePost.css"
import ModalPost from './modalPost/ModalPost'
import { Link } from 'react-router-dom'

const CreatePost = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Box className="bg-white border rounded-3 p-3 w-100">
        <Box className="" sx={{ width: "100%", display: 'flex', alignItems: "center", gap: "7px" }}>
          <Link className='text-decoration-none' to="/profile">
          <img width={40} src="/imgs/User/Profile picture.jpg" alt="" />
          </Link>
          <OutlinedInput
            onClick={()=> setOpen(true)}
            readOnly
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
            name='post'
            placeholder="Start a post"
            className='postInput border-0 rounded-pill'
            fullWidth
            color='black'
            size='small'
          />
        </Box>
        <Box className="d-flex justify-content-between align-items-center mt-3">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="imageUpload"
          />
          <label htmlFor="imageUpload">
            <Button
              component="span"
              sx={{ ":hover": { backgroundColor: "#F3F3F3", cursor: "pointer" } }}
              className="d-flex align-items-center gap-2 p-2"
            >
              <iconify-icon className="text-blue" icon="ph:image" width="20" height="20"></iconify-icon>
              <h6 className='mt-2 text-capitalize text-black'>Media</h6>
            </Button>
          </label>
            <Button sx={{ ":hover": { backgroundColor: "#F3F3F3", cursor: "pointer" } }} className="d-flex align-items-center gap-2 p-2">
              <iconify-icon className="text-green" icon="fluent:video-clip-28-filled" width="20" height="20"></iconify-icon>
              <h6 className='mt-2 text-capitalize text-black'>Video</h6>
            </Button>
          <Button sx={{ ":hover": { backgroundColor: "#F3F3F3", cursor: "pointer" } }} className="d-flex align-items-center gap-2 p-2">
            <iconify-icon className="text-orange" icon="mdi:newspaper-variant" width="20" height="20"></iconify-icon>
            <h6 className='mt-2 text-capitalize text-black'>Write article</h6>
          </Button>
        </Box>
      </Box>
      <ModalPost open={open} handleClose={() => setOpen(false)} />
    </div>
  )
}

export default CreatePost
