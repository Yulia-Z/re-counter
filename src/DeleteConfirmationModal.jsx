import React from 'react';
import './App.css';

function DeleteConfirmationModal(props) {

  return (
      <div className={props.isOpen ? '': 'modal'} tabIndex="-1" role="dialog">
      <div className='modal-dialog' role="document">
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Enter counter name <strong>{props.counterName}</strong> to delete</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          <input type='text' name='name' />
        </div>
        <div className='modal-footer'>
          <button className='btn btn-outline-secondary' >Cancel</button>
          <button className='btn btn-danger' disabled={true}>Delete</button>
        </div>
      </div>
      </div>
      </div>
  );
}

export default DeleteConfirmationModal;
