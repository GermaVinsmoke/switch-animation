import { useRef, useState } from 'react';
import './App.css';

function App() {
  const CIRCLE_WIDTH = 40;
  const SWITCH_WIDTH = 100;
  const [switchState, setSwitchState] = useState('off');
  const circleRef = useRef(null);
  const switchRef = useRef(null);
  const labelRef = useRef(null);

  const handleClick = () => {
    if (switchState === 'on') setSwitchState('off');
    else setSwitchState('on');
  };

  return (
    <div className="background">
      <div
        className="switch-container"
        onClick={handleClick}
        ref={switchRef}
        style={{ width: SWITCH_WIDTH }}
      >
        <div
          className="switch-circle"
          ref={circleRef}
          style={{ width: CIRCLE_WIDTH }}
        ></div>
      </div>
      <span className="label" ref={labelRef}>
        {switchState === 'on' ? 'N' : 'FF'}
      </span>
    </div>
  );
}

export default App;
