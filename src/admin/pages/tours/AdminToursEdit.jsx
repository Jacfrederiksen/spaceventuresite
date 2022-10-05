import React, { useState, useEffect } from "react";
import styles from "./adminToursEdit.module.scss";
import Loadingcomp from "./../../../components/loading/Loadingcomp";
import Errorcomp from "../../../components/errorcomp/Errorcomp";
import Popup from "../../../components/popup/Popup";
import { useParams } from "react-router-dom";

//CKEDITOR
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from "@ckeditor/ckeditor5-react";

//API
import { editTour, getTourById } from "../../../helpers/toursCall";

const AdminToursEdit = (props) => {

  // TAG ID FRA URL
  const { tourID } = useParams()

  const [tour, setTour] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();

  const [editorContent, setEditorContent] = useState();
  const [editorRoomtype, setEditorRoomtype] = useState();

  useEffect(() => {

    setLoading(true)
    getTourById(tourID)
    .then((data) =>{
      setTour(data)
      setError(false)
    })
    .catch((err) =>{
      setError(true)
      setTour()
    })
    .finally(() => {
      setLoading(false)
    })

  },[])

  const handleSubmit = (e) => {

    e.preventDefault();
    //Kald api og post ny tour

    setLoading(true)

    let updateTour = new FormData(e.target)

    editTour(updateTour, tourID)
    .then((data) => {
        setMessage("Tur er rettet")
        setError(false)
        // TODO: hvad skal der ske når tour er rettet?
/*         e.target.reset()  // TØM FORMULAREN
        setEditorContent("")  // TØM STATE, FOR AT TØMME CK EDITOR
        setEditorRoomtype("") // TØM STATE, FOR AT TØMME CK EDITOR */
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
      <h1>Edit Tour</h1>
      {
        message && <Popup title="Tour er rettet" content={message} setMessage={setMessage} />
      }
      {
        loading && <Loadingcomp />
      }
      {
        error && <Errorcomp />
      }
      { tour && 
      <form onSubmit={ handleSubmit }>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required defaultValue={tour.title} />
        <label htmlFor="teaser">Teaser description</label>
        <textarea name="teaser" className={styles.teasertxt} id="" cols="40" rows="5" required defaultValue={tour.teaser}></textarea>
        <label htmlFor="content">Description</label>
        <CKEditor 
              editor={Editor}
              data = { tour.content }
              onChange = {(event, e) => {
                setEditorContent(e.getData())
              }}
              onReady={ (e) => {
                setEditorContent (e.getData())
              }}
              
            />
        <textarea name="content" id="" cols="40" rows="10" defaultValue={ editorContent }></textarea>
        <label htmlFor="roomtype">Room Type</label>
        <CKEditor 
              editor={Editor}
              data = { tour.roomtype }
              onChange = {(event, e) => {
                setEditorRoomtype(e.getData())
              }}
              onReady={ (e) => {
                setEditorRoomtype (e.getData())
              }}
            />
        <textarea name="roomtype" id="" cols="40" rows="5" defaultValue={ editorRoomtype }></textarea>
        <label htmlFor="traveldate">Date</label>
        <input type="date" name="traveldate" 
          defaultValue={ new Date( tour.traveldate ).toLocaleDateString( "fr-CA" )}
          min={ new Date().toLocaleDateString( "fr-CA")} 
          required 
          onChange={ e => new Date (e.target.value) < new Date() ? alert("Vælg en dato der er senere end dags dato") : null} />
        <label htmlFor="duration">Duration</label>
        <input type="number" name="duration" defaultValue={tour.duration} min="1" max="360" required />
        <label htmlFor="priceminimum">Price min</label>
        <input type="number" name="priceminimum" defaultValue={tour.priceminimum} required />
        <label htmlFor="pricemaximum">Price max</label>
        <input type="number" name="pricemaximum" defaultValue={tour.pricemaximum} required />
        <label htmlFor="image" required></label>
        <input className={styles.file} type="file" name="image" id="" />
        <div className={styles.coverphoto_con}><p>Present coverphoto</p> <img src={"http://localhost:5099/images/tours/" + tour.coverimage} alt="" /></div>
        {/* Image2 kopi af den ovenover */}
        <button type="submit">Save edit</button>
      </form>
      }
    </div>
  );
};

export default AdminToursEdit;
