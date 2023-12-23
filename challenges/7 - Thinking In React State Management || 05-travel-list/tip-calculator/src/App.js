import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div>
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onBillInput={setBill} />
      <ServicePercentage id="primary-tip" tip={tip} onTipChange={setTip}>
        How did you like the service?
      </ServicePercentage>
      <ServicePercentage
        id="secondary-tip"
        tip={friendTip}
        onTipChange={setFriendTip}
      >
        How did your friend like the service?
      </ServicePercentage>

      {(bill !== 0 || tip !== 0 || friendTip !== 0) && (
        <>
          <Total bill={bill} tip={tip} friendTip={friendTip} />
          <Reset
            setBill={setBill}
            setTip={setTip}
            setFriendTip={setFriendTip}
          />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onBillInput }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => onBillInput(+e.target.value)}
      ></input>
    </div>
  );
}

function ServicePercentage({ id, tip, onTipChange, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select
        value={tip}
        onChange={(e) => onTipChange(+e.target.value)}
        id={id}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip, friendTip }) {
  const averageTip = ((tip + friendTip) / 200) * bill;
  const total = bill + averageTip;

  console.log(averageTip, tip, friendTip);

  return (
    <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
      You pay ${Math.round(total)} (${bill} + ${Math.round(averageTip)})
    </p>
  );
}

function Reset({ setBill, setTip, setFriendTip }) {
  function handleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <button style={{ cursor: 'pointer' }} onClick={handleReset}>
      Reset
    </button>
  );
}
