import { useState } from 'react';
import './App.css';

function App() {
  // Define a state variable named 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>My First React App</h1>
      <div style={{ fontSize: '24px', margin: '20px' }}>
        Count: <strong>{count}</strong>
      </div>
      
      {/* Buttons to update the state */}
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px' }}>
        Decrement
      </button>
    </div>
  );
}

export default App;