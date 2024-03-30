import { useEffect, useState } from "react";
const ProgressBar = ({ timer }) => {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            console.log('INTERVAL');
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            console.log('Cleaning INTERVAL');
            clearInterval(timeInterval);
        }
    }, [])
    return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;