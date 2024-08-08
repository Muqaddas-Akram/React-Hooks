import React, { useState } from "react";

function ToggleData() {
  const [myName, setMyName] = useState("Muqaddas");

  const changeName = () => {
    setMyName(myName === "Muqaddas" ? "Princess" : "Muqaddas");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default ToggleData;
