import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import * as queries from '../graphql/queries';
import './tasklist.css';
import Modal from '../components/Modal';

const TaskList = ( { user } ) => {

  const { data } = useQuery(queries.GET_TASKS_QUERY);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleClick = (task) => {
    setModalContent(task);
    setShowModal(!showModal);
  };

  const calculateTotalTime = () => {
    let totalTime = 0;
    data.tasks.filter((item) => item.userId === user.userId).map((task, index) => {
      totalTime += task.timer;
    })
    return totalTime;
  }

  return (
    <div>
      <ul className="tasklist">
        {data && data.tasks.filter((item) => item.userId === user.userId).map((task, index) => {
          return (
            <li key={index} onClick={() => handleClick(task)}>
              <h3>{task.name}</h3>
            </li>
          )
        })}
      </ul>
      {showModal && (
        <Modal modalContent={modalContent} setShowModal={setShowModal}/>
      )}

      <div>
        <h3>Total active time spent on tasks: {calculateTotalTime()} seconds</h3>
      </div>
    </div>
    

  )
}

export default TaskList;
