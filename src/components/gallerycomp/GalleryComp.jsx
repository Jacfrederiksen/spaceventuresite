import React, { useState, useEffect } from 'react'
import { getGallery } from '../../helpers/getCall'
import styles from './gallerycomp.module.scss'

const GalleryComp = () => {

    const [imgGallery, setImgGallery] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    useEffect(() => {
      setLoading(true);
  
      getGallery()
        .then((data) => {
          setError(false);
          setImgGallery(data);
          console.log(data)
        })
        .catch((err) => {
          setError(true);
          setImgGallery();
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return (
      <div className={styles.gallery_con}>
        { loading && <p>Loader</p> }
        { error && <p>Error</p>}
        {imgGallery && 
              imgGallery.map((g => 
                <div className={styles.img_con} key={g._id}>
                    <img src={"http://localhost:4444/images/gallery/" + g.image} alt="" />
                </div>
              ))
              }
      </div>
    )
}

export default GalleryComp