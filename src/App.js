

import { useState } from 'react';

import  {useFech} from "./hook/useFech"

import './App.css';
import Joker from './componets/joker';

function App() {

  const [endpoint,setEndpoint]= useState()
  const {data,loading,error_reducer} = useFech(endpoint)
  console.log(data);

  


  if (loading) return <h2>Cargando...</h2>
  if (error_reducer) return <h2>error</h2>

  return (
    <div className="App">
      <Joker data={data}></Joker>

    </div>
  );
}

export default App;
