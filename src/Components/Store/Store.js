import { configureStore } from "@reduxjs/toolkit";
import selectedContent from "./Slices/selectedContent"
import modalSlice from "./Slices/modalSlice"

const Store = configureStore({
    reducer: {
        selectedContent: selectedContent,
        modalSlice: modalSlice,
    },
});

export default Store;
