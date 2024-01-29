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
  }

  return (
    <section id="player">
      {/*  playerName ?? 'unknown entity' equivalent to playerName ? playerName  : 'unknown entity' */}
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
