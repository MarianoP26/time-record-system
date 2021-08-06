//React
import React, { useState } from 'react';

//Components
import TopBar from '../components/TopBar';
import Form from '../components/Form';
import Column from '../components/Column';
import TaskCreator from '../components/TaskCreator';
import TaskList from '../components/TaskList';

//Libs
import { useQuery } from '@apollo/client';
import * as queries from '../graphql/queries';

//Styles
import './home.css';

const Home = () => {

  const { data } = useQuery(queries.GET_USERS_QUERY);
  const [user, setUser] = useState({});

  return (
    <div>
      <div>
        <TopBar user={user} />
      </div>

      <div>
        <Form />
      </div>

      <div className="column-info">
        <div className="user-column">
          {data ? (
            <Column list={data.users} setUser={setUser}/>
          ) : (
            <h3>Err</h3>
          )}
        </div>

        <div className="task-column">
          {user && (
            <TaskCreator user={user}/>
          )}
          <div>
            <TaskList user={user}/>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Home;
