import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin/Signin.jsx'
import Signup from './Components/Signup/Signup.jsx';
import Home from './Components/Home/Home.jsx';
import ModalPost from './Components/Home/HomePage/CenterHome/createPost/modalPost/ModalPost.jsx';
import { Provider } from 'react-redux';
import Store from './Components/Store/Store.js';
import Profile from './Components/Profile/Profile.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={Store}>
         <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
    </Routes>
        </BrowserRouter>
    </Provider>
);
