import React from 'react';
import './modal.css';

const Modal = ( { modalContent, setShowModal } ) => {

  const { dateBegin, name } = modalContent;

  const date = new Date(dateBegin);
  const begin = date.toLocaleDateString("en-US")
  
  const now = Date.now();
  const diff = new Date(now - date);
  const hours = diff.getHours();
  const minutes = diff.getMinutes();
  const seconds = diff.getSeconds();
  const time = ""+hours - 1+":"+minutes+":"+seconds

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Task info</h2>
        </div>
      <div className="modal-body">
        <h5>The task {name} started on {begin}</h5>
        <h5>You've been active on this task for {time}</h5>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
      </div>
    </div>
  )
}

export default Modal;
