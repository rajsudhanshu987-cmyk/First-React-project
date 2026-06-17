import { motion } from "framer-motion";
import { useState, useRef } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (isRunning) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const reset = () => {
      stop();
      setTime(0);
    };

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const hundredths = Math.floor((time % 1000) / 10);

 const pad = (num) => String(num).padStart(2, "0");

    return (
       <motion.div
  className="stopwatch-container"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
            <h1>Stopwatch</h1>
            <div className="stopwatch">
               <motion.div
  className="time-display"
  animate={{ scale: isRunning ? [1, 1.03, 1] : 1 }}
  transition={{
    duration: 1,
    repeat: isRunning ? Infinity : 0
  }}
>
                    <span className="time-unit">{pad(minutes)}</span>
                    <span className="colon">:</span>
                    <span className="time-unit">{pad(seconds)}</span>
                    <span className="colon">:</span>
                    <span className="time-unit">{pad(hundredths)}</span>
                </motion.div>
         <div className="controls">
        <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={start}
>
  Start
</motion.button>

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={stop}
>
  Stop
</motion.button>

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={reset}
>
  Reset
</motion.button>
</div>
                </div>
            </motion.div>
    );
};

export default Stopwatch;
