import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div className='text-lg font-semibold text-center space-y-2 p-2'>
      <h1 className='my-2'>Count-down <p>{isRunning ? 'Running' : 'Not running'}</p> </h1>
      
      <div className='text-4xl'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    
    </div>
  );
}

 const CountDown=()=> {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2700); 
  return (
    <div className='bg-black text-success w-[200px] mx-auto my-5 rounded-lg text-center border border-success'>
      <MyTimer className='bg-black text-white' expiryTimestamp={time} />
    </div>
  );
}

export default CountDown;