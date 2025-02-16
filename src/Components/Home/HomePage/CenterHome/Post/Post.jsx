import { Box, Button, CardMedia, Divider, OutlinedInput, TextField, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Comment from './Comment/Comment';
import Like from './Like/Like';
import { useSelector } from 'react-redux';
import UpdatedPost from "./updatedPost/UpdatedPost.jsx"


const Post = () => {

    // CREATING STATE FOR TOGGLING THE COMMENT BOX
    const [showCommentBox, setShowCommentBox] = useState(false)

    // CREATING STATE FOR POSTING THE COMMENT
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    // CREATING STATE FOR COUNTING THE REPOSTS
    const [repost, setRepost] = useState(0)

    const incrementInPost = () => {
        let incrementInPost = repost + 1;
        setRepost(incrementInPost)
    }

    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox)
    }

    // CREATING FUNCTION FOR COMMENT SUBMITTING
    const commentSubmitter = (e) => {
        e.preventDefault()
        setComments([...comments, comment])
        setComment("")
    }


    // CREATING STATE FOR MANAGING THE HOVER ICONS, AND HOVERED ICONS
    const [hovered, setHovered] = useState(false)
    const [selectedReaction, setSelectedReaction] = useState(null)

    // CREATING STATE FOR THE VIEW MORE AND LESS MORE BUTTON IN THE POST 
    const [expanded, setExpanded] = useState(false)
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam quasi aperiam dolorum at pariatur commodi optio obcaecati, quo atque iste magnam fuga magni repellendus quas hic enim illo alias?"

    // CREATING STATE FOR MANAGING THE UPDATED POSTS
    const [updatedPost, setUpdatedPost] = useState([])

    const { selectedImg, selectedText, posts } = useSelector((state) => state.selectedContent)

    return (
        <div className='d-flex flex-column gap-4'>

            {/* SHOWING THE DYNAMIC POST FIRST */}


            {posts.length == 0 ? <Box className="bg-white border rounded-3 p-3 w-100">
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                    <Box className="post-info" sx={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <Box>
                            <img width={50} src="/imgs/User/Profile picture.jpg" alt="" />
                        </Box>
                        <Box className="mt-2">
                            <h6 className='fs-7'>Muhammad Saad</h6>
                            <Typography sx={{ fontSize: "12px", marginTop: "-6px", color: "#666666" }}>Frontend Web Developer | HTML | CSS | ReactJs</Typography>
                            <Typography sx={{ fontSize: "12px", marginTop: "-0px", color: "#666666" }}>1w . <PublicIcon sx={{ fontSize: "15px", cursor: "pointer" }} />  </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="post-opts" sx={{ display: 'flex', alignItems: "center", gap: "15px" }}>
                            <MoreHorizIcon sx={{ fontSize: "18px" }} />
                            <CloseIcon sx={{ fontSize: "18px" }} />
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-2">
                    <Typography component="p" sx={{ display: "inline" }}>
                        {expanded ? text : `${text.slice(0, 100)}... `}
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ color: "#666666", cursor: "pointer", fontWeight: "medium" }}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "less" : "more"}
                    </Typography>

                </Box>
                <Box>
                    <img className='img-fluid' src="/imgs/General/linked in home page.webp" alt="" />
                </Box>

                {/* REACTIONS AND COMMENTS COUNT */}

                <Box className="d-flex align-items-center justify-content-between">
                    <Box className="d-flex align-items-center gap-1">
                        <iconify-icon
                            style={{
                                color: selectedReaction ? selectedReaction.color : "#666666",
                                backgroundColor: selectedReaction ? selectedReaction.bg : "transparent",
                            }}
                            className='reaction_icons border-0 rounded-pill p-1'
                            icon={selectedReaction ? selectedReaction.icon : ""}
                            width="15" height="15">

                        </iconify-icon>
                        <Typography variant='span'>{selectedReaction ? "1" : ""}</Typography>
                    </Box>
                    <Box sx={{ color: "#666666", fontSize: "13px" }} className="d-flex align-items-center gap-2">
                        <Typography variant='span'>{comments.length} {comments.length < 2 ? "Comment" : "Comments"}</Typography>
                        <Typography variant='span'>{repost} Reposts</Typography>
                    </Box>
                </Box>

                <Divider className='mt-2' component="" variant='fullWidth' />
                <Box className="action-icons mt-2 d-flex align-items-center justify-content-between">
                    <Box
                        onMouseEnter={() => setTimeout(() => setHovered(true), 5000)}
                        onMouseLeave={() => setTimeout(() => setHovered(false), 5000)} // Delays closing the icons
                        sx={{ padding: "10px", ":hover": { cursor: "pointer", backgroundColor: "#EBEBEB" } }} className="d-flex align-items-center gap-1 fw-medium">
                        <iconify-icon style={{
                            color: selectedReaction ? selectedReaction.color : "#666666",
                            backgroundColor: selectedReaction ? selectedReaction.bg : "transparent",
                        }}
                            className='reaction_icons border-0 rounded-pill p-1' icon={selectedReaction ? selectedReaction.icon : "clarity:thumbs-up-line"} width="20" height="20"></iconify-icon>
                        <Typography sx={{ color: "#666666" }} component="span">{selectedReaction ? "" : "Like"}</Typography>
                    </Box>
                    <Box onClick={toggleCommentBox} sx={{ padding: "10px", ":hover": { cursor: "pointer", backgroundColor: "#EBEBEB" } }} className="d-flex align-items-center gap-1 fw-medium">
                        <iconify-icon icon="lineicons:comment-1-text" width="20" height="20"></iconify-icon>
                        <Typography sx={{ color: "#666666" }} component="span">Comment</Typography>
                    </Box>
                    <Box onClick={incrementInPost} sx={{ padding: "10px", ":hover": { cursor: "pointer", backgroundColor: "#EBEBEB" } }} className="d-flex align-items-center gap-1 fw-medium">
                        <iconify-icon icon="mdi:repost" width="20" height="20"></iconify-icon>
                        <Typography sx={{ color: "#666666" }} component="span">Repost</Typography>
                    </Box>
                    <Box sx={{ padding: "10px", ":hover": { cursor: "pointer", backgroundColor: "#EBEBEB" } }} className="d-flex align-items-center gap-1 fw-medium">
                        <iconify-icon icon="ri:send-plane-fill" width="20" height="20"></iconify-icon>
                        <Typography sx={{ color: "#666666" }} component="span">Share</Typography>
                    </Box>
                </Box>
                {/* DISPLAYING THE HOVER ICONS */}
                <Like
                    postId={posts.id}
                    selectedReaction={selectedReaction}
                    setSelectedReaction={setSelectedReaction}
                    hovered={hovered}
                    setHovered={setHovered}
                />

                {/* COMMENT FUNCTIONALITY */}

                <Comment
                    toggleCommentBox={toggleCommentBox}
                    comment={comment}
                    setComment={setComment}
                    comments={comments}
                    setComments={setComments}
                    showCommentBox={showCommentBox}
                />

            </Box> : (
                posts.map((post, key) =>
                    <UpdatedPost key={post.id} post={post} />
                )

            )}
        </div>
    )
}


export default Post