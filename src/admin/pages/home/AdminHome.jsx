import React, { useState, useEffect } from 'react'
import styles from './adminhome.module.scss';
import { AiOutlineDelete } from 'react-icons/ai'
import { getSubs } from '../../../helpers/subsCall';

const AdminHome = () => {

  const [subs, setSubs] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setLoading(true);

    getSubs()
      .then((data) => {
        setError(false);
        setSubs(data);
        console.log(data)
      })
      .catch((err) => {
        setError(true);
        setSubs();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.home_wrapper}>
        <div className={styles.home_welcome}>
          <h1>Velkommen hjem</h1>
          <p>Her er alle dine email subscriptions</p>
        </div>
        {
        subs && <div className={styles.home_subs}>

          {
            subs.map(s => 
            <div className={styles.sub} key={s._id}>
              <p>{s.email}</p>
              {/* <AiOutlineDelete className={styles.delete} color="red" size={"30px"} onClick={() => handleDelete(t._id)}/> */}
            </div>
            )
          }
        </div>
      }
    </div>
  )
}

export default AdminHome