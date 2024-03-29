import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  // const arr = useState(1);
  // console.log(arr);

  const [step, setStep] = useState(1);
  // console.log(step, setStep);

  /*const [test, setTest] = useState({ name: 'Jonas' });*/

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // always use callback function when updating state based on current value of state --- (s) => s - 1
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    /*
    // BAD PRACTICE
    // test.name = 'Fred';
    // CORRECT WAY
    setTest({ name: 'Fred' });
    */
  }

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
