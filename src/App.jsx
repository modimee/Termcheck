import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

let tomArray = [
  { term: 'term1', data: 'term 1 Data' },
  { term: 'term2', data: 'term 2 Data' },
  { term: 'term3', data: 'term 3 Data' },
  { term: 'term4', data: 'term 4 Data' }
];

function App() {
  const [btnToggle, setBtnToggle] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [checkboxes, setCheckboxes] = useState(Array(tomArray.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = checkboxes.map((checked, i) => (i === index ? !checked : checked));
    setCheckboxes(updatedCheckboxes);
  };

  const allChecked = checkboxes.every((checked) => checked);

  return (
    <>
      {
        tomArray.map((item, index) => (
          <div key={index}>
            <p>
            <input
              type="checkbox"
              checked={checkboxes[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            {item.term}
            {
              currentIndex === index ? (
                <button onClick={() => setCurrentIndex(null)}>-</button>
              ) : (
                <button onClick={() => setCurrentIndex(index)}>+</button>
              )
            }</p>
            {currentIndex === index && <p>{item.data}</p>}
          </div>
        ))
      }
      <button disabled={!allChecked}>Approve</button>
    </>
  )
}

export default App;