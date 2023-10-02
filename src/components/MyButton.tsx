import { useState } from "react";
import { randomizer } from "./Randomizer";
import memberList from "../data/memberList.json";

function MyButtonComponent() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [safetyArray, setSafetyArray] = useState<number[]>(Array(4).fill(0));

  const handleClick = () => {
    const generateRandomIndex = (): number => {
      const newIndex = randomizer(memberList);
      return safetyArray.includes(newIndex) ? generateRandomIndex() : newIndex;
    };

    const newIndex = generateRandomIndex();

    setSafetyArray((prevArray) => [newIndex, ...prevArray.slice(0, 3)]);
    setCurrentIndex(newIndex);
    console.log(safetyArray);
  };

  const displayArray = safetyArray.join(", ");

  return (
    <div>
      <h2>Randomizer</h2>
      <p>Current Person:</p>
      <p className="current_member">
        {memberList[currentIndex]?.firstName}{" "}
        {memberList[currentIndex]?.lastName}
      </p>
      <button onClick={handleClick}>Random Person</button>
      <p>Number of the Person : {currentIndex}</p>
      <p>Last 4 Numbers : {displayArray}</p>
    </div>
  );
}

export default MyButtonComponent;
