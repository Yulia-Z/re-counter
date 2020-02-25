import React, { useState } from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";

function App() {

  const initialCounters = [
    {id: 123, name: 'Counter 1', value: 8},
    {id: 234, name: 'Second', value: 8}
  ];

  const [counters, setCounters] = useState(initialCounters);

  const resetTotalCount = () => {
    console.log('reset');
    const newCounters = counters.map(el => ({ ...el, value:0 }));
    setCounters(newCounters);
  };

  const incrementCounter = (id) => {
    console.log('inc' + id);
    const newCounters = counters.map(el => el.id === id ? ({...el, value: el.value + 1}) : el);
    setCounters(newCounters);
  };
  const decrementCounter = (id) => {
    console.log('dec' + id);
    const newCounters = counters.map(el => el.id === id ? ({...el, value: el.value - 1}) : el);
    setCounters(newCounters);
  };
  const removeCounter = (id) => {
    console.log('rem' + id);
    const newCounters = counters.filter(el => el.id !== id);
    setCounters(newCounters);
  };

  const addCounter = (name, count) => {
    console.log('add');
    const newCounters = [ ...counters, {
      name,
      value: count,
      id: Math.random()
    }];
    setCounters(newCounters);
  };

  return (
    <div>
      <h1>Counters</h1>
      Total {counters.reduce((acc, cur) => acc + cur.value, 0)}
      <button onClick={resetTotalCount}>Reset total count</button>
      <hr/>
      {counters.map(el => <Counter
          key={el.id}
          id={el.id}
          name={el.name}
          value={el.value}
          increment={incrementCounter}
          decrement={decrementCounter}
          removeCounter={removeCounter}
      />)}
      <hr/>
      <AddCounterForm submit={addCounter}/>
    </div>
  );
}

export default App;
