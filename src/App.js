import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [valor, setvalor] = useState(""); //este es un hook, llamdo useState

  //este un comentario
  //de ejemplo para visualizar

  let arregloEjemplo = [1, 2, "jhk7", "uj", "dsadsd", "sad", "hector"];
  let verdadero = false;
  let otroFalseverdadero = true;
  let objetoEjemplo = {
    nombre: "Hector",
    apellido: "Balan",
    edad: 29,
    arreglo: [1, 2, 3, "valor", "6"],
  };

  for (let contador = 0; contador < arregloEjemplo.length ; contador = contador + 1) 
  {
    console.log(arregloEjemplo.length)
    console.log("valor de contador: ", arregloEjemplo[contador]);
  }

  console.log(objetoEjemplo["nombre"], "soy el objeto de ejemplo");
  //console.log(arregloEjemplo, "soy el arreglo");
  //console.log(arregloEjemplo[0] + arregloEjemplo[1], "soy el arreglo");

  let nombre = "hector";
  function ImprimirNombre() {
    console.log("estoy en nombre", nombre);
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
        {objetoEjemplo.nombre}
        {objetoEjemplo.apellido}
        <input
          placeholder="escribe tu nombre"
          onChange={(e) => change(e)}
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
