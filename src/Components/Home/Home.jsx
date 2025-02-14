import React from 'react'
import NavHome from './NavHome/NavHome'
import "./CSS/Home.css"
import HomePage from './HomePage/HomePage'


const Home = ()=>{
    return (
        <div className="homePage">
        <NavHome/>
        <HomePage/>
        </div>
    )
}

export default Home