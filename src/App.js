import { Link } from "react-router-dom";

function App() {
  const style={
    padding:"2em"
  }
  return (
    <>
    <nav>
        <Link style={style} to="/">Home</Link> |{" "}
        <Link to="ColorRenderer" style={style}>Color picker with color renderer</Link> |
        <Link to="Darkmode" style={style}>Dark Mode Page</Link> |
        <Link to="Form" style={style}>Form Validator</Link> |
        <Link to="Dogs" style={style}>Dogs</Link> |
        <Link to="Score" style={style}>Score Keeper</Link> |
        <Link to="WindowEvent" style={style}>Window Event</Link> |
      </nav> 
    <h1>Hi</h1>
   
    </>
  );
}

export default App;
