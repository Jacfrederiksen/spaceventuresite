import React, { useState } from "react";
import styles from "./adminToursAdd.module.scss";
import Loadingcomp from "./../../../components/loading/Loadingcomp";
import Errorcomp from "../../../components/errorcomp/Errorcomp";
import Popup from "../../../components/popup/Popup";

//CKEDITOR
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from "@ckeditor/ckeditor5-react";

//API
import { createTour } from "../../../helpers/toursCall";

const AdminToursAdd = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();

  const [editorContent, setEditorContent] = useState();
  const [editorRoomtype, setEditorRoomtype] = useState();

  const handleSubmit = (e) => {

    e.preventDefault();
    //Kald api og post ny tour

    setLoading(true)

    let newtour = new FormData(e.target)

    createTour(newtour)
    .then((data) => {
        setMessage("Ny tour er oprettet - har fået id: " + data.oprettet._id)
        setError(false)
        e.target.reset()  // TØM FORMULAREN
        setEditorContent("")  // TØM STATE, FOR AT TØMME CK EDITOR
        setEditorRoomtype("") // TØM STATE, FOR AT TØMME CK EDITOR
    })
    .catch((err) => {
        console.log(err)
        setError(true)
        setMessage()
    })
    .finally(
        setLoading(false)
    )
    
  }

  return (
    <div className={styles.addTour_con}>
      <h1>Opret ny tour</h1>
      {
        message && <Popup title="Ny er oprettet" content={message} setMessage={setMessage} />
      }
      {
        loading && <Loadingcomp />
      }
      {
        error && <Errorcomp />
      }
      <form onSubmit={ handleSubmit }>
      <label htmlFor="title">Title</label>
        <input type="text" name="title" required  />
        <label htmlFor="content">Description</label>
        <CKEditor 
              editor={Editor}
              data={editorContent}
              onChange = {(event, e) => {
                setEditorContent(e.getData())
              }}
              onReady={ (e) => {
                setEditorContent (e.getData())
              }}
              
            />
        <textarea name="content" id="" cols="40" rows="10" defaultValue={editorContent}></textarea>
        <label htmlFor="traveltime">Travel Time</label>
        <input type="text" name="traveltime" min="1" max="360" required />
        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" required />
        <label htmlFor="distance">Distance</label>
        <input type="text" name="distance" required />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" required />
        <label htmlFor="image1" required></label>
        <input className={styles.file} type="file" name="image1" id="" />
        <label htmlFor="image2" required></label>
        <input className={styles.file} type="file" name="image2" id="" />
        <button type="submit">Save tour</button>
      </form>
    </div>
  );
};

export default AdminToursAdd;
