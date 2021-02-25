// ActionCreator
export const addTask = payload => (
  // Action -> Design Pattern : Command 
  {
   type: 'ADD_TASK',
    payload
  }
)

export const removeTask = payload => ({
  type: 'REMOVE_TASK',
  payload
})