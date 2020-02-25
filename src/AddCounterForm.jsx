import React, { useState } from 'react';
import './App.css';


function AddCounterForm(props) {

  const [name, setName] = useState('----');
  const [count, setCount] = useState('0');

  const onSubmit = () => {
    props.submit(name, Number(count));
    setName('');
    setCount(0);
  };

  return (
    <div className='row'>
      <div className="col">
        <button onClick={() => onSubmit()} className='btn btn-outline-secondary'>Add counter</button>
      </div>
      <div className="col">
        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} className='form-control'/>
      </div>
      <div className="col">
        <input type="text" name='value' value={count} onChange={e => setCount(e.target.value)} className='form-control'/>
      </div>

    </div>
  );
}

export default AddCounterForm;
