import { useState } from 'react';
import './app.css';

export default function App() {
  return (
    <div className="app">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState('');

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="dateCounter">
      <div className="step">
        <label htmlFor="step">Step</label>
        <input
          id="step"
          type="range"
          max="10"
          min="0"
          step="1"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <span>{step}</span>
      </div>

      <div className="count">
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        ></input>
        <button
          onClick={() => {
            setCount((c) => +c + step);
          }}
        >
          +
        </button>
      </div>

      <p className="date">
        {count === '' || count === 0
          ? 'Today is'
          : count >= 1
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}{' '}
        {date.toDateString()}
      </p>

      {(count !== '' || step !== 1) && (
        <button
          className="resetBtn"
          onClick={() => {
            setStep(1);
            setCount('');
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
