import React from "react";

function MoreButton({ handleChangeSushi }) {

  function changeSushi(e) {
    console.log(e)
    handleChangeSushi(e)
  }

  return <button onClick={changeSushi}>More sushi!</button>;
}

export default MoreButton;
