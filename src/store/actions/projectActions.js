export const createProject = (project) => {
  //   Without using thunk
  //   return {
  //     type: "CREATE_PROJECT",
  //     project: project,
  //   };

  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
