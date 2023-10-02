import React, { useState } from "react";

function MyButtonComponent() {
  // Define a state variable to track the button click
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    // Perform your desired action here
    // For example, toggle a state variable
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {buttonClicked && <p>Button clicked!</p>}
    </div>
  );
}

export default MyButtonComponent;
