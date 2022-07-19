import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"
import ButtonColor from "../components/ButtonColor";

export default function ColorRenderer() {
    let [background, setBackground] = useState("white");
let bod = document.body;

useEffect(()=>{
    bod.style.backgroundColor=background;
})

    let arrayOfColor = [{
        hex: "#2F4858",
        name: "Charcoal"
    }, {
        hex: "#33658A",
        name: "Queen Blue"
    }, {
        hex: "#55DDE0",
        name: "Medium Turqoise"
    }, {
        hex: "#F26419",
        name: "Orange Red"
    }]
    return (
       <>

            <header style={{ paddingInlineStart: "4em" }}>
                <Link to="/">&larr; Home</Link> |{" "}
            </header>
            <main>
                <article style={{ display: "flex", flexDirection: "column", width: "240px" }}>
                    <h1>Hello again</h1>

                    {arrayOfColor.map(ar => <ButtonColor key={ar.name} BgCuloare={ar.hex} text={ar.name} state={setBackground}/>)}

                </article>
            </main>
        </>
    )
}