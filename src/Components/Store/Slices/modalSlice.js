import { createSlice, nanoid } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        openPostModal: false,
        openContactModal: false,
    },
    reducers: {
        setPostModal: (state,action) => {
            state.openPostModal = action.payload;
        },
        setContactModal: (state, action) => {
            state.openContactModal = action.payload;
        }
    }
})

export const { setPostModal, setContactModal } = modalSlice.actions

export default modalSlice.reducer;