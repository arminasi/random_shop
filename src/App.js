import { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards';
import Nav from './components/Header/Nav';

function App() {

  const [info, setInfo] = useState([]);
  const [basketData, setBasketData] = useState([]);

  const basketTools = {
    basketData,
    setBasketData,
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(getInfo => setInfo(getInfo))
  }, [])

  return (
    <>
    <Nav basketData={basketData}/>
    <Cards basketTools={basketTools} data={info}/>
    </>
  );
}

export default App;
