import { useState } from 'react';

const Display = ({ counter, progress }) => (
  <div>
    <div>{progress}</div>
    <div>{counter}</div>
  </div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => {
    setProgress(counter);
    setCounter(0);
  };

  console.log('rendering with counter value', counter);

  return (
    <div>
      <Display counter={counter} progress={progress} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
}

export default App;
