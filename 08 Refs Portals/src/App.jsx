import Player from './components/Player.jsx';
import RefExcercise from './components/RefExcercise.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      {/* <RefExcercise /> */}
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not easy"} targetTime={5} />
        <TimerChallenge title={"Getting Touch"} targetTime={10} />
        <TimerChallenge title={"Pros Only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
