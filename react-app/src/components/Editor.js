import React, { Component, useEffect, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import NavBar from "./NavBar";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const DropDownComponent = () => {
    return (
        <form>
            <input></input>
        </form>
    )
}

const EditorComponent = () => {
    return <Editor />
//   return (
//     <Editor
//       //   ref={editorReference}
//       toolbar={{inline: { inDropdown: true },
//       list: { inDropdown: true },
//       textAlign: { inDropdown: true },
//       link: { inDropdown: true },
//       history: { inDropdown: true },
//       image: {component: DropDownComponent}}}
//       editorStyle={{ border: "1px solid", backgroundColor: "beige" }}
//     ></Editor>
//   );
};
export default EditorComponent;
