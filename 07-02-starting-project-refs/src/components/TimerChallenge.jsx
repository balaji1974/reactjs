import { useState, useRef } from 'react';
import ResultModal from './ResultModal';


function TimerChallenge({title , targetTime}) {
  // useRef is used to create a mutable object that persists for the lifetime of the component.
  // It is often used to store a reference to a DOM element or to keep track of
  // a value that does not trigger a re-render when it changes.
  // Here, we use it to store the timer ID returned by setTimeout.
  // This allows us to clear the timeout later if needed.
  // The current property of the ref object is initialized to undefined.
  // When the component is rendered, the current property will be updated with the timer ID.
  // This is useful for managing side effects like timers or subscriptions.
  // The timer ID can be used to cancel the timeout using clearTimeout.
  // This prevents the timeout from executing if the component is unmounted or if the timer is stopped.
  // The useRef hook does not cause a re-render when the value changes,
  // so it is suitable for storing values that do not need to trigger a re-render.
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // setTimeout is used to delay the execution of the function 
    // for the specified number of milliseconds.
    // Here, we multiply targetTime by 1000 to convert seconds to milliseconds.
    // setTimeout returns a timer ID that can be used to cancel the timeout.
    timer.current = setTimeout(() => { 
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    //setTimerStarted(false);
  } 

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
      <section className="challenge" >
          <h2>{title}</h2>
          <p className="challenge-time">
              {targetTime} second{targetTime  > 1 ? 's' : '' }
          </p>
          <p>
              <button onClick={timerStarted ? handleStop: handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
              </button>
          </p>
          <p className={timerStarted ? 'active' : undefined}>
              {timerStarted ? 'Time is running....' : 'Inactive !!!!'}
          </p>
      </section>
    </>
  );
}

export default TimerChallenge;