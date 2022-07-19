import React from "react";
import { Link } from "react-router-dom";

export default function DarkMode(){
    const [status, setStatus]= React.useState(false)
    // function changeState(){
    //     setStatus(prev => !prev)
    // }

    function LighMode(){
        setStatus(prev => prev = false)
    }
    function DarkMode(){
        setStatus(prev => prev = true)
    }
    return(
    <>
    <header>
    <Link to="/">&larr; Home</Link> |{" "}
    </header>
    <main style={{backgroundColor:status?"#272D2D":"white",width:"70vw", height:"70vh",padding:"5em",display:"grid",gridTemplateColumns:"1fr",placeContent:"center"}}>
        <h1 style={{color:status?"#EAEAEA":"#353A47"}}>Dark Mode Page</h1>
        <button onClick={LighMode}>Switch to Light mode 🌞</button>
        <button onClick={DarkMode}>Switch to Dark mode 🌙</button>
        <img style={{filter:status?"brightness(65%)":"brightness(100%)"}}src="https://images.pexels.com/photos/12269324/pexels-photo-12269324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={320} height={320} alt="test"/>
    </main>
    </>)
}