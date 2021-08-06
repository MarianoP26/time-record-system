import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import './modal.css';

const Modal = ( { modalContent, setShowModal } ) => {

  const [updateTask, { error }] = useMutation(mutations.UPDATE_TASK_MUTATION, {
    refetchQueries: [ { query: queries.GET_TASKS_QUERY } ],
    awaitRefetchQueries: true,
  });

  const { dateBegin, name, id, timer } = modalContent;

  const date = new Date(dateBegin);
  const begin = date.toLocaleDateString("en-US")
  const now = Date.now();
  const diff = new Date(now - date);
  const hours = diff.getHours();
  const minutes = diff.getMinutes();
  const seconds = diff.getSeconds();
  const time = ""+hours - 1+":"+minutes+":"+seconds

  const [isTaskActive, setIsTaskActive] = useState(false);
  const [addTimer, setAddTimer] = useState(timer);
  console.log(addTimer);

  const toggleTask = () => {
    if(!isTaskActive){
      let timeToAdd =  addTimer;
      if(timeToAdd === null){
        timeToAdd = 0;
      }
      updateTask( { variables: {id, timer: timeToAdd}});
    }
    setIsTaskActive(!isTaskActive);
  };

  useEffect(() => {
    let interval = null;
    if (isTaskActive) {
      interval = setInterval(() => {
        setAddTimer(seconds => seconds + 1);
      }, 1000);
    } else if (!isTaskActive && addTimer !== 0) {
      clearInterval(interval);
      let timeToAdd =  addTimer;
      if(timeToAdd === null){
        timeToAdd = 0;
      }
      updateTask( { variables: {id, timer: timeToAdd}});
    }
    return () => clearInterval(interval);
  }, [isTaskActive, addTimer]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Task info</h2>
        </div>
      <div className="modal-body">
        <h5>The task {name} started on {begin}</h5>
        <h5>You created this task {time} hours ago</h5>
        <h5>Your active time spent on this task is {addTimer} seconds </h5>
      </div>
      <div className="modal-footer">
        {!isTaskActive ? (
          <button onClick={() => toggleTask()}>Continue task</button>
        ) : (
          <button onClick={() => toggleTask()}>Pause task</button>
        )}
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
      </div>
    </div>
  )
}

export default Modal;
