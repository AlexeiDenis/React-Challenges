import React from "react"
export default function Buton({ BgCuloare, text, state }) {
    return (

        <button onClick={()=> state(BgCuloare)} style={{ marginBlockEnd:"1em",padding:"1em",outline:"none",border:"none",backgroundColor: BgCuloare, color:"white", cursor:"pointer" }}>{text}</button>

    )
}