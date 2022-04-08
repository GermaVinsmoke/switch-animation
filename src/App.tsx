import './App.css';

function App() {
  const CIRCLE_WIDTH = 40;
  const SWITCH_WIDTH = 100;

  return (
    <div className="background">
      <div className="switch-container" style={{ width: SWITCH_WIDTH }}>
        <div className="switch-circle" style={{ width: CIRCLE_WIDTH }}></div>
      </div>
      <span className="label">OFF</span>
    </div>
  );
}

export default App;
