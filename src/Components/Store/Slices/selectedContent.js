import { createSlice, nanoid } from '@reduxjs/toolkit'

const selectedContent = createSlice({
    name: 'selectedContent',
    initialState: {
        posts: [],
        selectedImg: null,
        postContent: "",
    },
    reducers: {
        setPostContent: (state, action) => {
            state.postContent = action.payload;
        },
        clearPostContent: (state, action) => {
            state.postContent = ""
        },        
        setSelectedImg: (state, action) => {
            state.selectedImg = action.payload
        },
        clearSelectedImg: (state, action) => {
            state.selectedImg = null;
        },
        addPosts: (state, action) => {
            if (state.postContent.trim() || state.selectedImg) {
                state.posts.unshift({
                    id: nanoid(),
                    content: state.postContent,
                    image: state.selectedImg,
                    date: Date.now()
                })
            }
            state.postContent = ""
            state.selectedImg = null
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post)=>post.id !== action.payload);
            console.log(action, "action")
        }
    }
})

export const { setPostContent, clearPostContent, setSelectedImg, clearSelectedImg, addPosts, deletePost } = selectedContent.actions

export default selectedContent.reducer;