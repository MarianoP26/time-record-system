# time-record-system

-How much time did you spend?
approx 12 hours in 3 days.

Difficulties that you found in the task?
Used Nestjs and Graphql for the very first time. Also used @apollo/client for react for the first time.
I had many errors and headaches throughout the developing process so there will be some spaghetti code sometimes.
If I have to pick which was the most challenging part of this task it would be the implementation of mutation using useMutation and type correctly the gql syntax


How to use the app -> assuming you have both the server and the client development started.

The page is simple, there is an input for creating users (as many as you want, no passwords needed)
When the user is created, its name will show on the left side of the page in a column-list pattern.
To switch between users, just click on its names on said column.
When an user is selected, the TopBar greets him and now you will able to create Tasks.
Having the user selected, a new input field will show asking for a name for the new task you want to create.
When submitted, the task will appear under the input field.
You can create as many tasks as you want and the task will be created under the corresponding selected User.
When clicking a Task, a modal will show up revealing the task info (date created, how much time has passed since it was created and total active time)
Active time will only tick when the button "Continue task" in the modal is active. Closing the modal or pausing the task will make it stop.
When reactivating a task its timer will start over from where it was last time it has been paused.
You can only have one task active and closing the modal without pausing the task will pause it anyways.
Back in the tasklist screen, you will be able to see the Total Active Time from the selected User between all the tasks the User has.
