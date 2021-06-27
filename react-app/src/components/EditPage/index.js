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
          <h1 className="edit-page-product-descriptor">Product Name</h1>
          <EditName />
        </div>
        <h1>Product Description</h1>
        <EditDescription />
        <h1>Product Goal</h1>
        <EditGoal />
        <h1>Product Page</h1>
        <EditorComponent />
      </div>
    </div>
  );
};

export default EditPage;
