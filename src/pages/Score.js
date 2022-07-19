import React from "react"
import {Link} from "react-router-dom"

export default function Score(){
const [score, setScore]= React.useState(parseInt(localStorage.getItem("score")) || 0)


function addScore(){
    setScore(score => score + 1)
}
function decreaseScore(){
    setScore(score => score - 1)
}

React.useEffect(()=>{
localStorage.setItem('score', score)

},[score])

    return(
        <>
        <header><Link to="/">&larr; Home</Link> |{" "}</header>
       <h1>Your score is {score}</h1>
       <button onClick={addScore}>Add Score +</button>
       <button onClick={decreaseScore}>Decrease Score -</button>
        </>
    )
}