import React from 'react'
import styles from './gallery.module.scss'

const Gallery = () => {

  // Et array med alle galleri billederne
  const galleryArray = [
    "assets/img/galleri/1.jpg",
    "assets/img/galleri/2.jpg",
    "assets/img/galleri/3.jpg",
    "assets/img/galleri/4.jpg",
    "assets/img/galleri/5.jpg",
    "assets/img/galleri/6.jpg",
    "assets/img/galleri/7.jpg",
    "assets/img/galleri/8.jpg",
    "assets/img/galleri/9.jpg",
    "assets/img/galleri/10.jpg",
    "assets/img/galleri/11.jpg",
    "assets/img/galleri/12.jpg",
  ]

  return (
    <div className={styles.gallery_con}>
      <h1>Billeder fra vores ture</h1>
      <span><hr /></span>
      <div className={styles.gallery_img_con}>
        {
              galleryArray.map((i => 
                <div className={styles.img_con} key={i}>
                    <img src={i} alt={"Space gallery image" + i} />
                </div>
              ))
      }
      </div>
      </div>
  )
}

export default Gallery