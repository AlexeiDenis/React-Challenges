import React from "react"
import { Link } from "react-router-dom"


export default function Form() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmedPassword, setConfirmedPassword] = React.useState("");
    const [message, setMessage] = React.useState("");

    function findErrors() {
        const errors = [];
        if (!email || !password || !confirmedPassword) errors.push("All fields must be filled in.");
        if ([...email].filter(i => i === "@").length !== 1) errors.push("Email must have just one @ sign");
        if (password.length < 8) errors.push("Password must be at least 8 charachters long.");
        if (password !== confirmedPassword) errors.push("Password must match.");

        return errors;
    }

    function handleSubmit(event) {
        event.preventDefault()
        const errors = findErrors();
        setMessage(errors.length ? errors.join(", ") : "User Created Succesfully.")
    }
    return (
        <>
            <header><Link to="/">&larr; Home</Link> |{" "}</header>
            <main>

                <h1>Sign Up!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email adress" name="email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="confirm password" name="confirmedPassword" onChange={e => setConfirmedPassword(e.target.value)} />
                    <button>Validate</button>
                </form>
                <p className="errorText">{message}</p>
            </main>
        </>


    )
}