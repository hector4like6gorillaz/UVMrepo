import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";



function App() {
  const [valor, setvalor] = useState(""); //este es un hook, llamdo useState


  

 

  let nombre = "hector";
  function ImprimirNombre(){
    console.log("estoy en nombre", nombre)
  }

 ImprimirNombre();

  function mensaje() {
    //esta es una funcion
    console.log("bienvenido a la matrix ", valor);
  }

  function change(e) {
    //esta es otra funcion
    setvalor(e.target.value);
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <h3>Programacion estructurada</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          placeholder="escribe tu nombre"
          onChange={(e)=> change(e)}
          value={valor}
        />
        <button onClick={() => mensaje()}>Presioname!!!! porfavor</button>
        <p>Si me descargaste es porque ya sabes para que sirve git hub.</p>
        {valor}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/**
 echo "# UVMrepo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hector4like6gorillaz/UVMrepo.git
git push -u origin main
 */
