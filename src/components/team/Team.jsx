import React, { useState, useEffect } from 'react'
import styles from './team.module.scss'

// Components
import TeamCard from './TeamCard'
import Loading from './../loading/Loadingcomp'
import Errorcomp from './../errorcomp/Errorcomp'

// Api call
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
    <div className={styles.team_con}>
      { loading && <Loading/> }
      { error && <Errorcomp/>}
      { team && 
        <div className={styles.card_con}>
          <h2>Vores team</h2>
          <div className={styles.card_grid} >
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