import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';

function App() {
  
const [kumpulanData, setKumpulanData] = useState([])

const getApi = async () => {
  const poke = await fetch("https://pokeapi.co/api/v2/berry/")
  const value = await poke.json()
  // console.log(value)
  const result = value.results.map(data => {
    console.log(data)
    return {
      label: data.name,
      value: data.name
    }
  })
  // console.log(result)
  setKumpulanData(result)
   
}

useEffect(() => {
  getApi()
},[])

  return (
    <div className="App">
      <Select options={kumpulanData}></Select>
    </div>
  );
}

export default App;
