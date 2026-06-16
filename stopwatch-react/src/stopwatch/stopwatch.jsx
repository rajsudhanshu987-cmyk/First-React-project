import "./stopwach.css";

const Stopwatch = () => {
    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="stopwatch">
                <div className="time-display">
                    <span className="time-unit">0</span>
                    <span className="colon">:</span>
                    <span className="time-unit">0</span>
                    <span className="colon">:</span>
                    <span className="time-unit">0</span>
                </div>
          
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
              </div>
        </div>
    );
};

export default Stopwatch;
