import { Box, Divider, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../Comment/Comment';
import Like from '../Like/Like';
import { deletePost } from '../../../../../Store/Slices/selectedContent';
import { Link } from 'react-router-dom';


const UpdatedPost = ({ post }) => {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [repost, setRepost] = useState(0);
    const [hoveredPost, setHoveredPost] = useState(null);
    const [selectedReactions, setSelectedReactions] = useState({});
    const [expanded, setExpanded] = useState(false);

    const incrementInPost = () => setRepost(repost + 1);
    const toggleCommentBox = () => setShowCommentBox(!showCommentBox);

const dispatch = useDispatch()

    const handleReactionSelect = (postId, reaction) => {
        setSelectedReactions((prevReactions) => ({
            ...prevReactions,
            [postId]: reaction, // Store the selected reaction for this post
        }));
    };



    return (
        <div>
            <Box className="bg-white border rounded-3 p-3 w-100" sx={{ position: "relative" }}>
                {/* Post Header */}
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                                <Link className='text-decoration-none text-black' to="/profile">
                    <Box className="post-info" sx={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <Box>
                            <img width={50} src="/imgs/User/Profile picture.jpg" alt="" />
                        </Box>
                        <Box className="mt-2">
                            <h6 className='fs-7'>Muhammad Saad</h6>
                            <Typography sx={{ fontSize: "12px", marginTop: "-6px", color: "#666666" }}>
                                Frontend Web Developer | HTML | CSS | ReactJs
                            </Typography>
                            <Typography sx={{ fontSize: "12px", color: "#666666" }}>
                                1w <PublicIcon sx={{ fontSize: "15px", cursor: "pointer" }} />
                            </Typography>
                            </Box>
                    </Box>
                        </Link>
                    
                    {/* OPTIONS AND CLOSE ICON */}
                    <Box className="post-opts" sx={{ display: 'flex', alignItems: "center", gap: "15px" }}>
                        <MoreHorizIcon sx={{ fontSize: "18px",cursor:"pointer" }} />
                        <CloseIcon
                            onClick={() => dispatch(deletePost(post.id))}
                            sx={{ fontSize: "18px", cursor: "pointer" }} />
                    </Box>
                </Box>

                {/* Post Content */}
                <Box className="mt-2">
                    <Typography component="p" sx={{ display: "inline" }}>
                        {post?.content.length > 100
                            ? (expanded ? post?.content : `${post?.content.slice(0, 100)}... `)
                            : post?.content}
                    </Typography>
                    {post?.content.length > 100 && (
                        <Typography
                            component="span"
                            sx={{ color: "#666666", cursor: "pointer", fontWeight: "medium" }}
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "less" : "more"}
                        </Typography>
                    )}
                </Box>

                {/* Post Image */}
                {post?.image && (
                    <Box>
                        <img className='img-fluid mt-4' src={post?.image} alt="" />
                    </Box>
                )}

                {/* Reactions and Comments Count */}
                <Box className="d-flex align-items-center justify-content-between mt-3">
                    <Box className="d-flex align-items-center gap-1">
                        {selectedReactions[post.id] && (
                            <>
                                <iconify-icon
                                    style={{
                                        color: selectedReactions[post.id]?.color || "#666666",
                                        backgroundColor: selectedReactions[post.id]?.bg || "transparent",
                                    }}
                                    className='reaction_icons border-0 rounded-pill p-1'
                                    icon={selectedReactions[post.id]?.icon || "clarity:thumbs-up-line"}
                                    width="15"
                                    height="15"
                                ></iconify-icon>
                                <Typography variant='span'>1</Typography>
                            </>
                        )}
                    </Box>

                    <Box sx={{ color: "#666666", fontSize: "13px" }} className="d-flex align-items-center gap-2">
                        <Typography variant='span'>{comments.length} {comments.length < 2 ? "Comment" : "Comments"}</Typography>
                        <Typography variant='span'>{repost} Reposts</Typography>
                    </Box>
                </Box>

                <Divider className='mt-2' component="" variant='fullWidth' />

                {/* Action Buttons */}
                <Box className="action-icons mt-2 d-flex align-items-center justify-content-between">
                    <Box
                        onMouseEnter={() => setHoveredPost(post.id)}
                        onMouseLeave={() => setHoveredPost(null)} // Removed setTimeout
                        sx={{ position: "relative", padding: "10px", ":hover": { cursor: "pointer", backgroundColor: "#EBEBEB" } }}
                        className="d-flex align-items-center gap-1 fw-medium"
                    >
                        <iconify-icon
                            style={{
                                color: selectedReactions[post.id]?.color || "#666666",
                                backgroundColor: selectedReactions[post.id]?.bg || "transparent",
                            }}
                            className='reaction_icons border-0 rounded-pill p-1'
                            icon={selectedReactions[post.id]?.icon || "clarity:thumbs-up-line"}
                            width="20"
                            height="20"
                        ></iconify-icon>
                        <Typography sx={{ color: "#666666" }} component="span">
                            {selectedReactions[post.id] ? "" : "Like"}
                        </Typography>
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

                {/* Hover Icons */}
                {hoveredPost === post.id && (
                    <Box sx={{ position: "absolute", bottom: "160px", left: "0", backgroundColor: "white", padding: "5px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                        <Like
                            postId={post.id}
                            selectedReactions={selectedReactions}
                            handleReactionSelect={handleReactionSelect}
                            setHoveredPost={setHoveredPost}
                            setSelectedReactions={setSelectedReactions}
                        />
                    </Box>
                )}
            {/* Comment Functionality */}
            <Comment
                toggleCommentBox={toggleCommentBox}
                comment={comment}
                setComment={setComment}
                comments={comments}
                setComments={setComments}
                showCommentBox={showCommentBox} />
            </Box>

        </div>
    );
};

export default UpdatedPost;