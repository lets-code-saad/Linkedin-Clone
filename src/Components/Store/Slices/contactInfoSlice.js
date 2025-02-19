import { createSlice, nanoid } from '@reduxjs/toolkit'

const contactInfoSlice = createSlice({
    name: 'contactInfoSlice',
    initialState: {
        contactProfile: "www.linkedin.com/in/saad48",
        contactEmail: "saadabbas594@gmail.com",
        contactWebsite: "https:www.google.com",
        contactAddress: "Layyah, Punjab Pakistan",
        contactNo: "03201839399",
        contactLanguage: "English"

    },
    reducers: {
        setContactProfile: (state, action) => {
            state.contactProfile = action.payload;
        },
        setContactEmail: (state, action) => {
            state.contactEmail = action.payload;
        },
        setContactWebsite: (state, action) => {
            state.contactWebsite = action.payload;
        },
        setContactAddress: (state, action) => {
            state.contactAddress = action.payload;
        },
        setContactNo: (state, action) => {
            state.contactNo = action.payload;
        },
        setContactLang: (state, action) => {
            state.contactLanguage = action.payload;
        },
    }
})

export const { setContactProfile, setContactEmail, setContactWebsite, setContactAddress, setContactNo, setContactLang } = contactInfoSlice.actions

export default contactInfoSlice.reducer;