import React from 'react';
import './App.css';

function Counter(props) {
  return (
    <div>
      <button onClick={() => props.decrement(props.id)}>-</button>
      Counter name {props.name}
      Counter value {props.value}
      <button onClick={() => props.increment(props.id)}>+</button>
      <button onClick={() => props.removeCounter(props.id)}>Delete</button>
    </div>
  );
}

export default Counter;
