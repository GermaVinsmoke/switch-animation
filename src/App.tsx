import { gsap, Elastic } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const CIRCLE_WIDTH = 40;
  const SWITCH_WIDTH = 100;
  const [switchState, setSwitchState] = useState('off');
  const circleRef = useRef(null);
  const switchRef = useRef(null);
  const labelRef = useRef(null);

  const t1 = gsap.timeline();

  useEffect(() => {
    if (switchState === 'on') {
      t1.to(
        circleRef.current,
        {
          duration: 0.5,
          x: SWITCH_WIDTH - CIRCLE_WIDTH,
          backgroundColor: '#51ff0d',
          ease: Elastic.easeOut.config(1, 0.6),
        },
        'start'
      )
        .to(
          switchRef.current,
          {
            duration: 0.5,
            borderColor: '#51ff0d',
          },
          'start'
        )
        .fromTo(
          labelRef.current,
          { y: 20, opacity: 0, color: 'white' },
          { y: 0, opacity: 1, color: '#51ff0d', duration: 0.5 },
          'start'
        );
    } else {
      t1.to(
        circleRef.current,
        {
          duration: 0.5,
          x: 0,
          backgroundColor: '#fff',
          ease: Elastic.easeOut.config(1, 0.6),
        },
        'reverse'
      )
        .to(
          switchRef.current,
          {
            duration: 0.5,
            borderColor: '#fff',
          },
          'reverse'
        )
        .fromTo(
          labelRef.current,
          { y: 20, opacity: 0, color: 'white' },
          { y: 0, opacity: 1, color: 'white', duration: 0.5 },
          'reverse'
        );
    }
  }, [switchState]);

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
