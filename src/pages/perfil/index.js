import React, { useContext, useState } from 'react'
import styles from './profile.module.sass'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WestIcon from '@mui/icons-material/West';
import { AuthContext } from "@/context/auth";
import { getInitials } from "@/utils";
import { useServer } from '@/server/server';




const Profile1 = (props) => {


  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  console.log(user);

  const [open, setOpen] = useState(false);



  const initials = user ? getInitials(user.name) : "";

  const handleDrawer = () => {
    setOpen(!open);
  };

  const { logout } = useServer();


  const handleLogout = async () => {
    await logout();
    window.location.replace("/historico");
  };


  const [option, setOption] = useState(false);






  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {user === null ? <div className={styles.loader} /> :
          <div className={styles.cardGeral}>
            <div className={styles.card}>
              <div className={styles.header}>
                <div className={styles.row}>
                  <WestIcon className={styles.return} />
                  <h1>Perfil</h1>


                  <MoreVertIcon onClick={handleDrawer} />
                  <div className={open ? styles.drawerOpen : styles.drawerClosed}>
                    <ul>
                      <li>Editar</li>
                      <li>Editar</li>
                      <li>Historico</li>
                      <li
                        onClick={handleLogout}
                      >Sair</li>
                    </ul>
                  </div>



                </div>

              </div>
              <div className={styles.row_Info}>
                <div className={styles.avatar}>

                  <img src={user?.prefs?.avatar} />

                </div>
                <div className={styles.info}>
                  <h1>{user?.name}</h1>
                  <h2>{user?.email}</h2>
                </div>
              </div>
              <div className={styles.btn_row}>
                <div className={styles.btn}>
                  <button
                    onClick={() => setOption(false)}
                    className={styles.button_perfil}>Editar</button>
                  <button
                    onClick={() => setOption(true)}
                    className={styles.button_historico}>Historico</button>
                </div>
              </div>
            </div>
            {!option && <div className={styles.input_area}>

              <label
                className={styles.label}
              >Nome</label>

              <input type="text" placeholder={user?.name} />


              <label
                className={styles.label}
              >Email</label>

              <input type="text"
                placeholder={user?.email} />


              <label
                className={styles.label}
              >Email</label>

              <input type="text"
                placeholder={user?.email} />



              <label
                className={styles.label}
              >Email</label>

              <input type="text"
                placeholder={user?.email} />

            </div>}

            {option &&
              <div className={styles.historico}>
                <div className={styles.row_history}>
                  <button>Finalizado</button>
                  <button>Cancelado</button>
                  <button> Pendente </button>
                  <button>Todos</button>
                </div>
                <div className={styles.body_history}>
                </div>

              </div>
            }

          </div>
        }

      </div>

    </div>







  )
}


export default Profile1
