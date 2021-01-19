import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArr, setSushiArr] = useState([])
  const [fourSushi, setFourSushi] = useState(0)
  console.log(sushiArr)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((data) => {
    const updatedSushi = data.map((sushi) => {
    return {...sushi, eaten: false}
    })
    setSushiArr(updatedSushi)
    })
  }, [])
  

  function handleNewSushi() {
    // console.log("More Sushi Button")
    setFourSushi((fourSushi) => (fourSushi + 4) % sushiArr.length)
    }

    const showSushi = sushiArr.slice(fourSushi, fourSushi + 4)

  return (
    <div className="app">
      <SushiContainer showSushi={showSushi} sushiArr={sushiArr} handleChangeSushi={handleNewSushi} />
      <Table />
    </div>
  );
}

export default App;
