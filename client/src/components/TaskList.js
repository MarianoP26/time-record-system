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
    </div>
    

  )
}

export default TaskList;
