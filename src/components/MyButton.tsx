import React, { useState } from "react";
import { randomPick, randomizer } from "./Randomizer";
import memberList from "../data/memberList.json";
import { Member } from "./Interfaces";

function MyButtonComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex(randomizer(memberList));
    while (true) {}
  };

  return (
    <div>
      <h1>Number Iterator</h1>
      <p>Person:</p>
      <p>
        {memberList[currentIndex].firstName} {memberList[currentIndex].lastName}
      </p>
      <button onClick={handleClick}>Next Number</button>
    </div>
  );
}

export default MyButtonComponent;
