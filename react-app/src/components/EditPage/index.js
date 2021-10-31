import React from "react";
import EditorComponent from "../Editor";
import EditName from "../EditName";
import EditDescription from "../EditDescription";
import EditGoal from "../EditGoal";
import "./index.css";

const EditPage = () => {
  return (
    <div className="outer-div-edit">
      <div className="edit-page-container">
        <div className="edit-page-field">
          <h1>Project Name</h1>
          <EditName />
        </div>
        <div className="edit-page-field">
          <h1>Project Description</h1>
          <EditDescription />
        </div>
        <div className="edit-page-field">
          <h1>Project Goal</h1>
          <EditGoal />
        </div>
        <div className="edit-page-field">
          <h1>Project Page</h1>
          <EditorComponent />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
