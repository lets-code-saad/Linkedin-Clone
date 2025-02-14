import { configureStore } from "@reduxjs/toolkit";
import selectedContent from "./Slices/selectedContent"

const Store = configureStore({
    reducer: {
        selectedContent: selectedContent,
    },
});

export default Store;
