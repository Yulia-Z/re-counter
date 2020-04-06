import React from 'react';
import './App.css';

function Counter(props) {

  const { id, name, value } = props.counterData;

  return (
    <div className='card mb-2'>
      <div className="card-body">
        <div className="row">
          <div className="col">
            {name}
          </div>
          <div className="col">
            <button onClick={() => props.decrement(id)} className='btn btn-primary'>-</button>
            {value}
            <button onClick={() => props.increment(id)} className='btn btn-primary'>+</button>
          </div>
          <div className="col">
            <button onClick={() => props.removeConfirmation(props.counterData)} className='btn btn-danger' >Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
