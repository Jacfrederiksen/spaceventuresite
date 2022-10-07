import React, { useState, useEffect } from "react";
import styles from "./adminhome.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

//API
import { getSubs } from "../../../helpers/subsCall";
import { deleteSub } from "../../../helpers/subsCall";

const AdminHome = () => {
  const [subs, setSubs] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // State der fortæller om sub er slettet eller ej
  const [subDeleted, setSubDeleted] = useState();

  useEffect(() => {
    setLoading(true);

    getSubs()
      .then((data) => {
        setError(false);
        setSubs(data);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setSubs();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [subDeleted]);

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Er du sikker på at du vil slette brugerens email subscription?"
      )
    ) {
      setLoading(true);

      deleteSub(id)
        .then((data) => {
          setSubDeleted(true, id);
        })
        .catch((err) => {
          console.log(err);
          setSubDeleted(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.welcome_con}>
        <h1>Velkommen hjem</h1>
        <p>Her er alle dine email subscriptions</p>
      </div>
      {subs && (
        <div className={styles.subs_con}>
          {subs.map((s) => (
            <div className={styles.sub} key={s._id}>
              <p>{s.email}</p>
              {
                <AiOutlineDelete
                  className={styles.delete}
                  color="red"
                  size={"30px"}
                  onClick={() => handleDelete(s._id)}
                />
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminHome;
