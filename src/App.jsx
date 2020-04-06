import React, { useState } from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";
import TotalCounter from "./TotalCounter";
import DeleteConfirmationModal from "./DeleteConfirmationModal";


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
  const removeCounter = () => {
    const newCounters = counters.filter(el => el.id !== counterForDeleteConfirmation.id);
    setCounters(newCounters);
    setCounterForDeleteConfirmation({});
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

  const [counterForDeleteConfirmation, setCounterForDeleteConfirmation] = useState({});

  const openConfirmationModal = (el) => {
    setCounterForDeleteConfirmation(el);
  };

  const confirmDeleteCancel = () => {
    setCounterForDeleteConfirmation({});
  };

  return (
    <div className='container'>
      <h1>Counters</h1>
      <TotalCounter counters={counters} reset={resetTotalCount}/>
      <hr/>
      {counters.map(el => <Counter
          key={el.id}
          counterData={el}
          increment={incrementCounter}
          decrement={decrementCounter}
          removeConfirmation={openConfirmationModal}
      />)}
      <hr/>
      <AddCounterForm submit={addCounter}/>
      <DeleteConfirmationModal counterName={counterForDeleteConfirmation.name}
                               onSuccess={removeCounter}
                               onCancel={confirmDeleteCancel}
      />
    </div>
  );
}

export default App;
