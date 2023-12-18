import { useState } from 'react';
import './app.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepIncrement() {
    setStep((s) => s + 1);
  }

  function handleStepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleCountIncrement() {
    setCount((c) => c + step);
  }

  function handleCountDecrement() {
    setCount((c) => c - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <Button sign="-" event={handleStepDecrement} />
        <span>Step: {step}</span>
        <Button sign="+" event={handleStepIncrement} />
      </div>

      <div>
        <Button sign="-" event={handleCountDecrement} />
        <span>Count: {count}</span>
        <Button sign="+" event={handleCountIncrement} />
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

function Button({ sign, event }) {
  return <button onClick={event}>{sign}</button>;
}
