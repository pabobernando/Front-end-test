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
  const result = value.results
  .sort((a, b) => a.name < b.name ? -1 : 1)
  .map(data => {
    return {
      label: data.name,
      value: data.name
    }
  })

  console.log(result)
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
