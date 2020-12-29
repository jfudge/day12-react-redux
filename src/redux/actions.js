// Action creator function.
// Action is just a simple object with a type property
// But in practice, people like to make "action creators"
// Action creators are just functions that return actions

/*
  nameObject = {
    firstName: string,
    lastName: string,
  }
*/
export const changeName = (nameObject) => {
  // This action creator function will return an action
  return {
    type: 'CHANGE_NAME',
    payload: nameObject,
  }
};