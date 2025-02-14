import { Box } from '@mui/material';
import React from 'react';
import "./LIke.css";

const Like = ({ postId, selectedReactions, setSelectedReactions, hovered, setHoveredPost }) => {
    // Reactions array
    const reactions = [
        { name: "Like", icon: "clarity:thumbs-up-line", bg: "#378FE9", color: "#D0E8FF" },
        { name: "Celebrate", icon: "ph:hands-clapping", bg: "#6DAE4F", color: "#DDF6D1" },
        { name: "Support", icon: "mingcute:hand-heart-line", bg: "#BBA9D1", color: "#EAE2F3" },
        { name: "Love", icon: "mdi:heart", bg: "red", color: "white" },
        { name: "Insightful", icon: "fluent-mdl2:insights", bg: "#F5BB5C", color: "#FCF0DE" },
        { name: "Haha", icon: "bi:emoji-laughing", bg: "#44BFD3", color: "#D5F9FE" },
    ];

    return (
        <>
            {/* Hover Icons */}
            {hovered === postId && (
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-90px",
                        backgroundColor: "white",
                        height: "50px",
                        paddingX: "10px",
                        boxShadow: "10px 10px 0 0"
                    }}
                    className="d-flex border-0 rounded-pill shadow-sm align-items-center gap-2"
                    onMouseEnter={() => setHoveredPost(postId)}
                    onMouseLeave={() => setHoveredPost(null)}
                >
                    {reactions.map((reaction, index) => (
                        <iconify-icon
                            key={index}
                            onClick={() => {
                                setSelectedReactions((prev) => ({
                                    ...prev,
                                    [postId]: reaction, // Store reaction for this post
                                }));
                                setHoveredPost(null); // Hide reactions after selection
                            }}
                            style={{ color: reaction.color, backgroundColor: reaction.bg }}
                            className="reaction_icons border-0 rounded-pill p-1"
                            icon={reaction.icon}
                            width="35"
                            height="35"
                        />
                    ))}
                </Box>
            )}
        </>
    );
};

export default Like;
