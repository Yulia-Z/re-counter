import React, { useState } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function DeleteConfirmationModal(props) {

  const { counterName } = props;
  const [inputName, setInputName] = useState('');
  const deleteButtonClick = () => {
    props.onSuccess();
    setInputName('');
  };

  const cancelButtonClick = () => {
    props.onCancel();
    setInputName('');
  };


return (
        <Modal isOpen={Boolean(counterName)} >
          <ModalHeader>Enter counter name <strong>{counterName}</strong> to delete</ModalHeader>
          <ModalBody>
            <input type='text' name='name' value={inputName} onChange={e => setInputName(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={cancelButtonClick}>Cancel</Button>{' '}
            <Button color="secondary" disabled={inputName !== counterName} onClick={deleteButtonClick}>Delete</Button>
          </ModalFooter>
        </Modal>
    )
}

//   const { name, id } = props.counterData;
//   const [inputName, setInputName] = useState('');
//
//   return (
//       <div className={props.isOpen ? '': 'modal'} tabIndex="-1" role="dialog">
//         <div className='modal-dialog' role="document">
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5 className='modal-title'>Enter counter name <strong>{name}</strong> to delete</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className='modal-body'>
//               <input type='text' name='name' value={inputName} onChange={e => setInputName(e.target.value)}/>
//             </div>
//             <div className='modal-footer'>
//               <button className='btn btn-outline-secondary' >Cancel</button>
//               <button className='btn btn-danger' disabled={inputName !== name} onClick={() => props.removeCounter(id)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

export default DeleteConfirmationModal;
