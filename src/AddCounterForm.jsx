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
    <div>
      <button onClick={() => onSubmit()}>Add counter</button>
      <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" name='value' value={count} onChange={e => setCount(e.target.value)}/>

    </div>
  );
}

export default AddCounterForm;
