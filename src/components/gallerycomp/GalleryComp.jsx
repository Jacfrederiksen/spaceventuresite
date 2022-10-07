import React, { useState, useEffect } from 'react'
import styles from './gallerycomp.module.scss'

// Components
import Loading from './../loading/Loadingcomp'
import Errorcomp from './../errorcomp/Errorcomp'

// API Call
import { getGallery } from '../../helpers/getCall'


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
        { loading && <Loading /> }
        { error && <Errorcomp />}
        { imgGallery && 
              imgGallery.map((g => 
                <div className={styles.img_con} key={g._id}>
                    <img src={"http://localhost:4444/images/gallery/" + g.image} alt={"Gallery images" + g.image} />
                </div>
              ))
              }
      </div>
    )
}

export default GalleryComp