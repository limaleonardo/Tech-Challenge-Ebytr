const reducer = (tasks = [], action) => {
  switch (action.type) {
  case 'FETCH_ALL':
    return tasks;
  case 'CREATE':
    return tasks;
  case 'UPDATE':
    return tasks;
  case 'DELETE':
    return tasks;
  default:
    return tasks;
  }
};

export default reducer;
