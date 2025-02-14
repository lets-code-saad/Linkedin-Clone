import React from 'react'
import { Box,OutlinedInput,Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';

const Comment = ({ toggleCommentBox, comment, setComment, comments, setComments, showCommentBox }) => {

    // Function to handle comment submission
    const commentSubmitter = (e) => {
        e.preventDefault();
        if (comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment("");
        }
    };

  return (
    <>
          {/* COMMENT SECTION */}
          {/* COMMENT INPUT */}

          {showCommentBox && <Box className="comment-section mt-3">
              <form onSubmit={commentSubmitter}>
                  <Box className="" sx={{ width: "100%", display: 'flex', alignItems: "center", gap: "7px" }}>
                      <img width={35} src="/imgs/User/Profile picture.jpg" alt="" />
                      <OutlinedInput
                          sx={{
                              width: "100%",
                              ":hover": { backgroundColor: "#F3F3F3", cursor: "pointer" }
                          }}
                          name='comment'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Add a comment"
                          className='postInput border-0 rounded-pill'
                          fullWidth
                          color='black'
                          size='small'

                      />
                  </Box>
              </form>
              {/* When comments is empty, .map() has nothing to loop through, so nothing is rendered.
                    When we will submit a comment, setComments([...comments, comment]) adds a new comment
                     to the array. Since the component re-renders when state updates, comments.map() runs
                      again with the new data. */}

              {/* COMMENT */}
              {comments.map((c, index) => (
                  // using this "()" symbol because we're directly returning JSX from an arrow function
                  <Box key={index} className="comment" sx={{ backgroundColor: "#F4F1F4", paddingX: "10px" }}>
                      <Box className="mt-3" sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                          <Box className="comment-info" sx={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                              <Box>
                                  <img width={35} src="/imgs/User/Profile picture.jpg" alt="" />
                              </Box>
                              <Box className="mt-2">
                                  <h6 className='fs-7'>Muhammad Saad</h6>
                                  <Typography sx={{ fontSize: "12px", marginTop: "-6px", color: "#666666" }}>Frontend Web Developer | HTML | CSS | ReactJs</Typography>
                              </Box>
                          </Box>
                          <Box>
                              <Box className="comment-opts" sx={{ display: 'flex', alignItems: "center", gap: "15px" }}>
                                  <Typography sx={{ fontSize: "12px", marginTop: "-0px", color: "#666666" }}>1w</Typography>
                                  <MoreHorizIcon sx={{ fontSize: "18px" }} />
                              </Box>
                          </Box>
                      </Box>
                      <Box className="py-2">
                          <Typography component="span">{c}</Typography>
                      </Box>
                  </Box>
              ))
              }
          </Box>} 
    </>
  )
}
export default Comment
