import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <h1>Lumora</h1>
        <p>Your AI life system starts here.</p>

        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    </div>
  );
}