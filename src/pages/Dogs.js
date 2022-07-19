import React from "react"
import { Link } from "react-router-dom"

const getPicture= async ()=>{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const display = await response.json();
    return display.message;
}

export default function Dogs() {
        const [picture, setPicture]= React.useState("");
        React.useEffect(()=>{
            getPicture().then(pict => setPicture(pict))
        }, [])
    return (
        <>
            <header>
                <Link to="/">&larr; Home</Link> |{" "}
            </header>
            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }} className="wrapper">
                <img src={picture} alt="dog" width={400} height={400} />
                <button onClick={async e => setPicture(await getPicture())}> get a new dog pic 🐶</button>
            </div>
        </>
    )
}