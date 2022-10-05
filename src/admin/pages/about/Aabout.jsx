import React, { useEffect, useState } from "react";
import styles from "./aabout.module.scss";
import { getAbout, editAbout } from "./../../../helpers/aboutCall";
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Loadingcomp from './../../../components/loading/Loadingcomp'
import Errorcomp from './../../../components/errorcomp/Errorcomp'

const AdminAbout = () => {
  const [aboutContent, setAboutContent] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // State til bruger besked efter submit
  const [message, setMessage] = useState();

  //Editor
  const [editortxt, setEditortxt] = useState();

  useEffect(() => {
    setLoading(true);

    getAbout()
      .then((data) => {
        setAboutContent(data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setAboutContent();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault() // undgå reload af component

    // Data skal sendes til apiet som formdata. Formularindhold til formdata

    let aboutFormConversion = new FormData(e.target)

    editAbout(aboutFormConversion)
    .then(data => {
        setMessage(data.message)
    })
    .catch(err => {
        setMessage("Der er sket en fejl.")
    });
  }

  return (
    <div className={styles.about_con}>
      <h2>Rediger About</h2>
      {
      loading && <Loadingcomp/>
      }
      {
      error && <Errorcomp beskedtest="Fejlbesked" />
      }
      
      {aboutContent && (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title" defaultValue={aboutContent.title}
            />
            <label htmlFor="content">Content</label>
            <textarea name="content" id="message" cols="80" rows="10" defaultValue={ editortxt }></textarea>
            <CKEditor 
              editor={Editor}
              data={aboutContent.content}
              onChange = {(event, e) => {
                setEditortxt(e.getData())
              }}
              onReady = {(e) => {
                setEditortxt(e.getData())
              }}
            />
            <label htmlFor="image">Billede</label>
            <input className={styles.file} type="file" name="image" />
            <div className={styles.image_con}><img src={"http://localhost:5099/images/about/" + aboutContent.image} alt="" /></div>
            <button type="submit">Gem rettelser</button>
            <div className={styles.message_con}><p>{message}</p></div>
          </form>
        </>
      )}
    </div>
  );
};

export default AdminAbout;
