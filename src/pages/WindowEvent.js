import React from "react"
import {Link} from "react-router-dom"

export default function WindowEvent(){
React.useEffect(()=>{
const dblClicked = ()=>{alert("mouse pressed");}

window.addEventListener('dblclick', dblClicked)

return ()=> window.removeEventListener('dblclick', dblClicked)

},[])
    return(
        <>
         <header><Link to="/">&larr; Home</Link> |{" "}</header>
        <h1>Let's See 🤔</h1>
            <button>Toggle to disable</button>
        </>
    )
}