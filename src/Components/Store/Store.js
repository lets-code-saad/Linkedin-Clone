import { configureStore } from "@reduxjs/toolkit";
import selectedContent from "./Slices/selectedContent"
import modalSlice from "./Slices/modalSlice"
import contactInfoSlice from "./Slices/contactInfoSlice"

const Store = configureStore({
    reducer: {
        selectedContent: selectedContent,
        modalSlice: modalSlice,
        contactInfoSlice: contactInfoSlice,
    },
});

export default Store;
