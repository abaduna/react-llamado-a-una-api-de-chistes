

import { useState } from 'react';

import  {useFech} from "./hook/useFech"

import './App.css';
import Joker from './componets/joker';
import Serch from './componets/Serch';

function App() {

  const [endpoint,setEndpoint]= useState()
  // const [lenguaje,setLenguaje]= useState()
  const {data,loading,error_reducer} = useFech(endpoint)

  console.log(data);

  // const findLenguaje =({lenguaje})=>{
  //   setEndpoint(lenguaje)
  // }
  


  if (loading) return <h2>Cargando...</h2>
  if (error_reducer) return <h2>error</h2>

  return (
    <div className="App">
      <Serch setEndpoint={setEndpoint}></Serch>
      <Joker data={data}></Joker>

    </div>
  );
}

export default App;
