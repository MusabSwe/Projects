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
  }

  return (
    <section id="player">
      <h2>Welcome {isShowName ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
