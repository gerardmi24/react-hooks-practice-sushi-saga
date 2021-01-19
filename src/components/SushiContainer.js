import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ handleChangeSushi, showSushi }) {

  const renderSushi = (
    showSushi.map((sushiEl) => <Sushi sushiEl={sushiEl} key={sushiEl.id} />)
  )

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleChangeSushi={handleChangeSushi} />
    </div>
  );
}

export default SushiContainer;
