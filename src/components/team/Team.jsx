import React, { useState, useEffect } from 'react'
import styles from './team.module.scss'
import { getTeam } from '../../helpers/getCall'
import TeamCard from './TeamCard'

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
    <div className={styles.team_con}>
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      {team && 
        <div className={styles.team_card_con}>
          <h2>Vores team</h2>
          <div className={styles.team_card_grid} >
            {
            team.map((t => 
              <TeamCard team={t} key={t._id} />
            ))
            }
          </div>
        </div>
      }
        
    </div>
  )
}

export default Team