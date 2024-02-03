import { useState } from "react";

// if we add variable outside component will not recrated
// below variable will be shared across all components instances 
// let timer; not a good solution

const TimerChallenge = ({ title, targetTime }) => {
    const [timeerStarted, setTimeerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);
    const timer = useRef();

    // will not chnage as state
    // let timer; not a good soltion since when clich handleStop 
    // not reconised timer and component not refreshing

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000)
        setTimeerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timeerStarted ? handleStop : handleStart}>
                    {timeerStarted ? "Stop" : "Start"} Challenge
                </button>

            </p>
            <p className="">
                {timeerStarted ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
    );
}

export default TimerChallenge;