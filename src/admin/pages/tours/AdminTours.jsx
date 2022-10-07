import styles from './admintours.module.scss';
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom';

// Components
import Loadingcomp from './../../../components/loading/Loadingcomp'
import Errorcomp from './../../../components/errorcomp/Errorcomp'

// API call
import { getTours, deleteTour } from './../../../helpers/toursCall'

const AdminTours = () => {

  const [tours, setTours] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // STATE TIL HÅNDTERING OM EN TOUR ER SLETTET ELLER FEJL
  const [tourDeleted, setTourDeleted] = useState()

  useEffect(() => {
    
    setLoading(true)
    getTours()
    .then((data) => {
      setTours(data)
      setError(false)
    })
    .catch((err) => {
      setError(true)
      setTours()
    })
    .finally(() => {
      setLoading(false)
    })

  }, [ tourDeleted ])

  const handleDelete = (id, title) => {

     if (window.confirm("Er du sikker på at du vil slette touren: " + title + " med id: " + id )) {

    setLoading(true)
    
    deleteTour(id)
    .then((data) => {
      setTourDeleted(true, id)
    })
    .catch((err) => {
      console.log(err)
      setTourDeleted(false)

    })
    .finally(() => {
      setLoading(false)
    })}
  }
  

  return (
    <div className={styles.tours_con}>
      <div className={styles.header_con}><h1>Tours</h1></div>

      <Link to="/admin/admintoursadd">Opret ny tour</Link>

      {
      loading && <Loadingcomp/>
      }
      {
      error && <Errorcomp />
      }
      {
        tours && <div className={styles.card_con}>

          {
            tours.map(t => 
            <div className={styles.card} key={t._id}>
              <p>{t.title}</p>
              <AiOutlineDelete className={styles.delete} color="red" size={"30px"} onClick={() => handleDelete(t._id)}/>
              <Link to={"/admin/admintoursedit/" + t._id}><AiOutlineEdit color="green" size={"30px"}/></Link>
            </div>
            )
          }
        </div>
      }
    </div>
  )
}

export default AdminTours