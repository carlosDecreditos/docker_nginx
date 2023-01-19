import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [estado, setEstado] = useState([])
  const [loading, setLoading] = useState(false)
  
     const getGamesAll = async () => {
       const options = {
         method: "GET"
       };
       
       // Petición HTTP
      //  fetch(process.env.REACT_APP_REST+"/games", options)
       fetch("/api/games", options)
         .then(response => response.json())
         .then(data => {
           setEstado(data)
           setLoading(true)
         });
     };
 
 
     useEffect(() => {
       getGamesAll()
     }, [])
 
 
     console.log(estado)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Larabel de mierda
        </a>
        <div>
          {loading ? <p>CONEXION CON BACKEND EXITOSA</p>:<p>NO SE CONECTO AL BACK</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
