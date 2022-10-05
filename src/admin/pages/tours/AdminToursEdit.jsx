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

    setLoading(true)

    let updateTour = new FormData(e.target)

    editTour(updateTour, tourID)
    .then((data) => {
        setMessage("Turen er rettet")
        setError(false)
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
        message && <Popup title="Touren er rettet" content={message} setMessage={setMessage} />
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
        <label htmlFor="traveltime">Travel Time</label>
        <input type="text" name="traveltime" defaultValue={tour.traveltime} min="1" max="360" required />
        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" defaultValue={tour.destination} required />
        <label htmlFor="distance">Distance</label>
        <input type="text" name="distance" defaultValue={tour.distance} required />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" defaultValue={tour.price} required />
        <label htmlFor="image1" required></label>
        <input className={styles.file} type="file" name="image1" id="" />
        <div className={styles.coverphoto_con}><p>Image 1</p> <img src={"http://localhost:4444/images/tours/" + tour.image1} alt="" /></div>
        <label htmlFor="image2" required></label>
        <input className={styles.file} type="file" name="image2" id="" />
        <div className={styles.coverphoto_con}><p>Image 2</p> <img src={"http://localhost:4444/images/tours/" + tour.image2} alt="" /></div>
        <button type="submit">Save edit</button>
      </form>
      }
    </div>
  );
};

export default AdminToursEdit;
