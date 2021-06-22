import React, { Component, useEffect, useRef, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import ReactDOM from 'react-dom'
import NavBar from "./NavBar";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const EditorComponent = () => {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 500,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount',
            'image media'
           ],
           menubar:false,
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help | image',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           image_list: [
            {title: 'My image 1', value: 'https://www.example.com/my1.gif'},
            {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
        ],
         }}
       />
       <button onClick={log}>Log editor content</button>
     </>
   );
};
export default EditorComponent;
