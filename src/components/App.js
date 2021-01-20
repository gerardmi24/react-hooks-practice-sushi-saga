import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArr, setSushiArr] = useState([])
  const [fourSushi, setFourSushi] = useState(0)
  const [money, setMoney] = useState(75)
  // console.log(sushiArr)

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

  function removeSushi(eatSushi) {
    if (money >= eatSushi.price) {
    const updatedSushi = sushiArr.map((sushi) => {
      if (sushi.id === eatSushi.id) return {...sushi, eaten: true};
      return sushi;
    });
    setSushiArr(updatedSushi);
    setMoney((money) => money - eatSushi.price);
  } else {
    alert("You're broke, eat less!")
    // console.log("Remove eaten sushi", eatSushi)
  }
  }

  const eatenPieces = sushiArr.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer removeSushi={removeSushi} showSushi={showSushi} sushiArr={sushiArr} handleChangeSushi={handleNewSushi} />
      <Table money={money} plates={eatenPieces} />
    </div>
  );
}

export default App;
