import gql from 'graphql-tag';



export const CREATE_USER_MUTATION = gql`
mutation CreateUser($name: String!) {
  createUser(createUserInput : {
    name: $name
  }) {
    id name
  }
}`;

export const CREATE_TASK_MUTATION = gql`
mutation CreateTask($name: String!, $userId: Int!){
  createTask(createTaskInput : {
    name: $name,
    userId: $userId,
  }) {
    name
    user{
      name,
    }
  }
}
`