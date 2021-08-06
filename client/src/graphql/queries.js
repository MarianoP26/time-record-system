import gql from 'graphql-tag';


export const GET_USERS_QUERY = gql`
{
  users{
    name id
  }
}
`;

export const GET_TASKS_QUERY = gql`
{
  tasks{
    id,
    name,
    userId,
    dateBegin,
    isDone,
    timer,
  }
}
`;