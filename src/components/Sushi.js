import React from "react";

function Sushi({ sushiEl, removeSushi }) {
  const { name, img_url, price, eaten } = sushiEl;


  function handleClick() {
    if (!eaten) {
      removeSushi(sushiEl);
    }
    // console.log("Eat sushi", e.target)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : <img
            src={img_url}
            alt={name, "Sushi"}
            width="100%"
          />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
