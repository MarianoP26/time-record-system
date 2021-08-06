import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import './form.css';

const Form = () => {

  const inputUsernameRef = useRef(null);
  const [createUser, { error }] = useMutation(mutations.CREATE_USER_MUTATION, {
    refetchQueries: [ { query: queries.GET_USERS_QUERY } ],
    awaitRefetchQueries: true,
  });


  const submit = (e) => {
    e.preventDefault();
    let name = inputUsernameRef.current.value;
    createUser( {variables: {name}} );
    inputUsernameRef.current.value = null;
  };

  
  return (
    <div className="form">
      <form onSubmit={(e) => submit(e)}>
        <label>Create new user</label>
        <input ref={inputUsernameRef} placeholder="Type username here"></input>
        <button type="submit">Create</button>
      </form>
      {error && (
        <h1>Error while creating the user</h1>
      )}
      
    </div>
  )
}

export default Form;
