import { useState, useEffect} from 'react'
import './App.css'

import Procesos from './assets/Funciones';

function App() {
  const [count, setCount] = useState(0)
  const [nombre,setNombre] = useState("")


  useEffect(() => {
   console.log("me estoy actualizando",count) 

  
  }, [count]); //componentDidMount montaje 

 



  return (
    <div className="App">
      <h3>Hello World</h3>
      <button onClick={()=>{setCount(Procesos(count))}}>procesar</button>
      <button onClick={()=>{setNombre("camilo")}}>Cambiar</button>
      <input type="text" name="" onChange={(event) => {
            setNombre(event.target.value);
          }} value={nombre}/>
      <h1>{count}</h1>
      <h2>{nombre}</h2>

    </div>
  )
}

export default App
