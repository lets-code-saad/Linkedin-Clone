import { createSlice, nanoid } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        openPostModal: false,
        openContactModal: false,
        openEditContModal:false,
    },
    reducers: {
        setPostModal: (state,action) => {
            state.openPostModal = action.payload;
        },
        setContactModal: (state, action) => {
            state.openContactModal = action.payload;
        },
        setOpenEditContModal: (state, action) => {
            state.openEditContModal = action.payload
        }
    }
})

export const { setPostModal, setContactModal, setOpenEditContModal } = modalSlice.actions

export default modalSlice.reducer;