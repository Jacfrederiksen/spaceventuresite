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
        <input type="text" name="title" required />
        <label htmlFor="teaser">Teaser description</label>
        <textarea name="teaser" className={styles.teasertxt} id="" cols="40" rows="5" required></textarea>
        <label htmlFor="content">Description</label>
        <CKEditor 
              editor={Editor}
              data = { editorContent }
              onChange = {(event, e) => {
                setEditorContent(e.getData())
              }}
            />
        <textarea name="content" id="" cols="40" rows="10" required defaultValue={ editorContent }></textarea>
        <label htmlFor="roomtype">Room Type</label>
        <CKEditor 
              editor={Editor}
              data = { editorRoomtype }
              onChange = {(event, e) => {
                setEditorRoomtype(e.getData())
              }}
            />
        <textarea name="roomtype" id="" cols="40" rows="5" required defaultValue={ editorRoomtype }></textarea>
        <label htmlFor="traveldate">Date</label>
        <input type="date" name="traveldate" required onChange={ e => new Date (e.target.value) < new Date() ? alert("Vælg en dato der er senere end dags dato") : null} />
        <label htmlFor="duration">Duration</label>
        <input type="number" name="duration" min="1" max="360" required />
        <label htmlFor="priceminimum">Price min</label>
        <input type="number" name="priceminimum" required />
        <label htmlFor="pricemaximum">Price max</label>
        <input type="number" name="pricemaximum" required />
        <button type="submit">Add new tour</button>
        <label htmlFor="coverimage" required></label>
        <input className={styles.file} type="file" name="image" id="" required />
        <label htmlFor="galleryimages" required></label>
        <input className={styles.file} type="file" name="galleryimages" id="" multiple required />
      </form>
    </div>
  );
};

export default AdminToursAdd;
