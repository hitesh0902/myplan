export const createProject = (project) => {
  //   Without using thunk
  //   return {
  //     type: "CREATE_PROJECT",
  //     project: project,
  //   };

  // With thunk for async call to database
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Hitesh",
        authorLastName: "Rawat",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERRROR", err });
      });
  };
};
