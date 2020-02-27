import React, {useState} from 'react';
import './App.css';
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function Counter(props) {

  const [isOpen, setIsOpen] = useState(false);
  //const [nameForConfirmation, setNameForConfirmation] = useState('');

  const openConfirmationModal = () => {
    setIsOpen(true);
  };

  return (
    <div className='card mb-2'>
      <div className="card-body">
        <div className="row">
          <div className="col">
            {props.name}
          </div>
          <div className="col">
            <button onClick={() => props.decrement(props.id)} className='btn btn-primary'>-</button>
            {props.value}
            <button onClick={() => props.increment(props.id)} className='btn btn-primary'>+</button>
          </div>
          <div className="col">
            <button onClick={openConfirmationModal} className='btn btn-danger' >Delete</button>
          </div>
          <DeleteConfirmationModal isOpen={isOpen} counterName={props.name}/>
        </div>
      </div>
    </div>
  );
}

export default Counter;
