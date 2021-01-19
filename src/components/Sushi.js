import React from "react";

function Sushi({ sushiEl }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushiEl.img_url}
            alt={sushiEl.name, "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiEl.name} - ${sushiEl.price}
      </h4>
    </div>
  );
}

export default Sushi;
