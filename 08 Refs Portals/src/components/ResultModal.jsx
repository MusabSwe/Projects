import { forwardRef, useImperativeHandle, useRef } from 'react'; // this libarary works on every react app even react native
// createPortal used to change the position of component in the DOM
// example before use Portal dialog apper in the section and should appear in the body tag 
// since overlay appear in top of entire page
import { createPortal } from 'react-dom'; // this library used to interact with Dom and manuplate it

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with{' '}
                <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;