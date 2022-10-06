import React, {useState, useEffect} from 'react'
import styles from './form.module.scss'
import Loading from './../loading/Loadingcomp'
import Errorcomp from './../errorcomp/Errorcomp'

//Api
import { sendContact } from './../../helpers/formCall'

const Form = () => {

  const [sendForm, setSendForm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSub = e => {
      e.preventDefault();

      setLoading(true)

      let formData = new FormData(e.target)

      sendContact( formData )
      .then((data) => {
          setSendForm(true)
          setError(false)
      })
      .catch((err) => {
          setSendForm(false)
          setError(true)
      })
      .finally(() => {
          setLoading(false)
      })
  }

  return (
    <div className={styles.form_con}>
          {
              loading && <Loading/>
          }
          {
              error && <Errorcomp/>
          }
          {
              sendForm && <h4>Din besked er blevet sendt</h4>
          }
          {
              !sendForm &&

              <form onSubmit={handleSub}>
                  <input type="text" name="name" placeholder="Dit navn" required></input>
                  <input type="email" name="email" placeholder="E-mail" required></input>
                  <input type="tel" name="phone" placeholder="Tlf" required></input>
                  <textarea className={styles.message} type="text" name="message" placeholder="Besked" required></textarea>
                  <button type="submit">Send</button>
              </form>
          }
      </div>
  )
}

export default Form