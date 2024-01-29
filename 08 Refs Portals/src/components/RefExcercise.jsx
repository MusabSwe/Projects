import React from "react";
import "./RefExcercise.css";
const RefExcercise = () => {
    const click = React.useRef();
    
    const handleClick = () => {
         click.current.click();
    }
    
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={click} data-testid="file-picker" type="file" accept="image/*"  />
        <button onClick={handleClick} >Pick Image</button>
      </p>
    </div>
  );
}
 
export default RefExcercise;