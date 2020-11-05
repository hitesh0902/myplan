import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

const Notifications = (props) => {
  const { projects } = props;
  console.log(projects);
  return (
    <div style={{ marginTop: 30 }}>
      <h5>Notifications</h5>
      <div style={{ padding: 1 }} className="card z-depth-0">
        {projects &&
          projects.map((project) => (
            <div key={project.id} className="pink-text">
              <blockquote>
                {`${project.authorFirstName} ${project.authorLastName}`}
                <span className="grey-text text-darken-2">
                  {" "}
                  added a new project{" "}
                </span>
                <span className="grey-text text-darken-1">
                  (
                  {moment(project.createdAt.toDate()).startOf("hour").fromNow()}
                  ).
                </span>
              </blockquote>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(Notifications);
