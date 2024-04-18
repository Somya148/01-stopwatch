

import { useEffect, useState } from "react";

function App() {
  //usestate
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  //useeffect
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Update time by adding 10
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="bg-black  h-screen flex items-center justify-center text-white">

      <div className="h-[40rem]  w-[19rem] rounded-2xl border-4 border-gray-500 flex justify-center align-center items-center">

        <div className="h-[39rem]  w-[18rem] rounded-2xl border-2 border-gray-500 ">

          <div className="m-5 text-5xl">
            <h1 className="text-yellow-400 ">Measure </h1>
            <h1><span className="italic font-thin">time</span> of your</h1>
            <h1> Activities.</h1>
          </div>

          <div className="m-5">
            <h1><span className="text-yellow-400">01</span> - StopWatch</h1>
            <p className="text-gray-700 italic font-semibold pt-3 pb-7">Keep time on your side with a stopwatch.</p>
          </div>


          <div className="rounded-full border-4 border-yellow-400 w-44 h-44 m-auto flex justify-center align-center">
            <div className="rounded-full border-2 border-yellow-400 w-40 h-40 m-auto pl-8 pt-14 font-thin text-2xl">
              <span>{("0" + Math.floor(time / 60000 % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor(time / 1000 % 60)).slice(-2)}:</span>
              <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
          </div>


          <div className="flex justify-center align-center mt-5">



            {running ? (
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded" onClick={() => setRunning(false)}>Stop</button>
            ) : (
              <button className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-1 px-4 rounded" onClick={() => setRunning(true)}>Start</button>
            )}
            <button className="bg-gray-700  hover:bg-gray-800 text-white  font-semibold py-1 px-4 rounded ml-4" onClick={() => setTime(0)}>Reset</button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;