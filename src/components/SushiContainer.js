import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiArr}) {

  const renderSushi = (
    sushiArr.map((sushiEl) => <Sushi sushiEl={sushiEl} key={sushiEl.id} />)
  )
  
  function handleNewSushi() {
    console.log("More Sushi Button")

  }

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleChangeSushi={handleNewSushi} />
    </div>
  );
}

export default SushiContainer;
