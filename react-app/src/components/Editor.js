import React, { Component, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import apiKey from "../api-key";
import { useDispatch, useSelector } from "react-redux";
import { getMedia } from "../store/media";
import { useParams } from "react-router-dom";
import { postNewPageHTML } from "../store/project";
import { getAllProjects } from "../store/allProjects";

const EditorComponent = () => {
  const [value, setValue] = useState(
    "<p>The quick brown fox jumps over the lazy dog</p>"
  );
  const [text, setText] = useState("");
  const media = useSelector((state) => state.MediaList.media);
  const allProjects = useSelector((state) => state.allProjects.projects)
  const [mediaArrayForImageList, setMediaArrayForImageList] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getTheMedia = async () => {
    await dispatch(getMedia(id));
    toObj(media);
  };
  useEffect(() => {
    getTheMedia();
    dispatch(getAllProjects())
  }, [media]);

  useEffect(() => {

  }, [value, text])
  const editorRef = useRef(null);
  const toObj = (array) => {
    let count = 1;
    let mediaArray = [];
    array.forEach((ele) => {
      let mediaObj = {};
      mediaObj["title"] = `Image ${count}`;
      mediaObj["value"] = ele;
      mediaArray.push(mediaObj);
      count++;
    });
    setMediaArrayForImageList(mediaArray);
  };
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postNewPageHTML(value, id))
          console.log(value);
          // add redirect to the project's official page?
        }}
      >
        <Editor
          apiKey={apiKey}
          onInit={(evt, editor) => (editorRef.current = editor)}
          // initialValue="<p>This is the initial content of the editor.</p>"
          value={value}
          onEditorChange={(newValue, editor) => {
            setValue(newValue);
            setText(editor.getContent({ format: "text" }));
          }}
          init={{
            height: 500,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "image media",
            ],
            menubar: false,
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help | image | save",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            image_list: mediaArrayForImageList,
          }}
        />
        <button type={"submit"}>Submit</button>
        {/* <button onClick={log}>Log editor content</button> */}
      </form>
    </>
  );
};
export default EditorComponent;
