import React, { useState, useEffect } from 'react'
import styles from './team.module.scss'
import { getTeam } from '../../helpers/getCall'

const Team = () => {

  const [team, setTeam] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true);

    getTeam()
      .then((data) => {
        setError(false);
        setTeam(data);
        console.log(data)
      })
      .catch((err) => {
        setError(true);
        setTeam();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.team_wrapper}>
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      {team && 
        <div className={styles.team_con}>
          <h2>Vores team</h2>
          <div className={styles.team_gallery}>
            {
            team.map((t => 
            <div className={styles.card_con}>

            </div>
            ))
            }
          </div>
        </div>
      }
        
    </div>
  )
}

export default Team