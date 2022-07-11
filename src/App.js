import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
const [kumpulanData, setKumpulanData] = useState([])
const [pokemon, setPokemon] = useState('')


const getApi = async () => {
  const poke = await fetch("https://pokeapi.co/api/v2/berry/")
  const value = await poke.json()
  // console.log(value)
  const result = value.results
  .sort((a, b) => a.name < b.name ? -1 : 1)
  .map(data => {
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
      <h1 className='bg-dark text-white'>{pokemon}</h1>
      <Select onChange={(e) => setPokemon(e.value)} options={kumpulanData}></Select>
    </div>
  );
}

export default App;
