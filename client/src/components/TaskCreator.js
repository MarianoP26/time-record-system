import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const TaskCreator = ( {user} ) => {

  const inputTaskName = useRef(null);
  const [createTask, { error }] = useMutation(mutations.CREATE_TASK_MUTATION, {
    refetchQueries: [ { query: queries.GET_TASKS_QUERY } ],
    awaitRefetchQueries: true,
  });


  const submit = (e) => {
    e.preventDefault();
    let name = inputTaskName.current.value;
    createTask( {variables: {name, userId: user.userId}} );
    inputTaskName.current.value = null;
  };

  return (
    <div className="form">
      <form onSubmit={(e) => submit(e)}>
        <label>Create new task for {user.name}</label>
        <input ref={inputTaskName} placeholder="Type the task name here"></input>
        <button type="submit">Create task</button>
      </form>
    </div>
  )
}

export default TaskCreator;
