import React from 'react';
import './App.css';

function TotalCounter(props) {
  return (
    <div>
      Total {props.counters.reduce((acc, cur) => acc + cur.value, 0)}
      <button onClick={() => props.reset()} className='btn btn-warning'>Reset total count</button>
    </div>
  );
}

export default TotalCounter;
