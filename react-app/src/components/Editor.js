import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => <Editor
wrapperClassName="wrapper-class"
// editorClassName="editor-class"
// toolbarClassName="toolbar-class"
wrapperStyle={<wrapperStyleObject>}
{/* editorStyle={<editorStyleObject/>}
toolbarStyle={<toolbarStyleObject/>} */}
/>

export default EditorComponent;
