import React, { Component, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { getMedia } from "../store/media";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { postNewPageHTML } from "../store/project";

const EditorComponent = () => {

  const [text, setText] = useState("");
  const media = useSelector((state) => state.MediaList.updated_media_info);
  const allProjects = useSelector((state) => state.allProjects.projects)
  const [value, setValue] = useState('');
  const [loaded, setLoaded] = useState(false)
  const [page_html, setPage_Html] = useState('')
  const [mediaArrayForImageList, setMediaArrayForImageList] = useState([]);
  const [letThisWork, setLetThisWork] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  let currentProject;
  let history = useHistory();

  const getTheMedia = async () => {
    await dispatch(getMedia(id));
  };

  useEffect(() => {
    //========== Sets the RTE Value to the page_html of Project in useParams ==============
    if (allProjects[1] && !loaded) {
      currentProject = allProjects.filter(proj => {
        return proj.id === Number(id)
      })
      setValue(currentProject[0].page_html)
      setLoaded(true)
    }
    if (media?.length === 0) getTheMedia();
    toObj(media)
  }, [media, allProjects]);

  useEffect(() => {}, [media, text]) // text change updates RTE

  //========== Sets Media In DropDown Select Field ==============
  const editorRef = useRef(null);
  const toObj = (array) => {
    let count = 1;
    let mediaArray = [];
    array.forEach((ele) => {
      let mediaObj = {};
      mediaObj["title"] = `Image ${count}`;
      mediaObj["value"] = ele.media_url;
      mediaArray.push(mediaObj);
      count++;
    });
    setMediaArrayForImageList(mediaArray);
  };

  return (
    <>
      <form
        //========== Updates the Value in the Database and allProjects Thunk ==============
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postNewPageHTML(value, id))
          currentProject = allProjects.filter(proj => {
            return proj.id === Number(id)
          })
          currentProject[0].page_html = value
          setPage_Html(currentProject[0].page_html)
          // add redirect to the project's official page?
          setLetThisWork(true);
        }}
        >
        <Editor
          apiKey={process.env.REACT_APP_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
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
      </form>
      {letThisWork? <Redirect to={`/projects/${id}`} />: null}
    </>
  );
};
export default EditorComponent;
