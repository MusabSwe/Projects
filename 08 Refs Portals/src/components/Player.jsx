<<<<<<< HEAD
import { useState } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [isShowName, setIsShowName] = useState(false);

  const handleClick = () => {
    setIsShowName(true);
  }

  const handleNameChange = (e) => {
    setIsShowName(false);
    setPlayerName(e?.target?.value);
=======
import { useState,useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    // playerNameRef?.current display JS object
    console.log("playerNameRef: ", playerNameRef?.current);
    setPlayerName(playerNameRef.current.value); // declartive code since affecting dom
    playerNameRef.current.value = ''; // imperative code since not affecting dom and display for read only
>>>>>>> a873c7b1dddf57f0813a897710eb23e674435971
  }

  return (
    <section id="player">
<<<<<<< HEAD
      <h2>Welcome {isShowName ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
=======
      {/*  playerName ?? 'unknown entity' equivalent to playerName ? playerName  : 'unknown entity' */}
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
>>>>>>> a873c7b1dddf57f0813a897710eb23e674435971
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
