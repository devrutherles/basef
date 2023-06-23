import React, { useContext, useState } from 'react'
import styles from './perfil.module.sass'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WestIcon from '@mui/icons-material/West';
import { AuthContext } from "@/context/auth";
import { getInitials } from "@/utils";
import { useServer } from '@/server/server';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';

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



  const pedido = {
    saida: "petrolina-pe",
    destino: "juazeiro-ba",
    data: "12/12/2021",
    distancia: "12km",
  }




  return (
    <div className={styles.container}>
      <div className={styles.content}>




        {option == false &&
          <div className={styles.card_perfil}>
            <div className={styles.box}>
              <div className={styles.header_perfil}>
                <div className={styles.row_perfil}>
                  <div className={styles.avatar}>
                    <img src={user?.prefs?.avatar} />
                  </div>
                  <div className={styles.info_perfil}>
                    <h1>{user?.name}</h1>
                    <h2>{user?.email}</h2>
                  </div>
                  <div className={styles.avaliacao}>
                    <StarIcon />
                    <h1>4.5</h1>
                  </div>
                </div>

                <MoreVertIcon onClick={handleDrawer} />
                <div className={open ? styles.drawerOpen : styles.drawerClosed}>
                  <ul>
                    <li onClick={() => setOption(false)}>Editar</li>
                    <li>Editar</li>
                    <li
                      onClick={() => setOption(true)}
                    >Historico</li>
                    <li
                      onClick={handleLogout}
                    >Sair</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.input_area}>
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
              </div>
            </div>
          </div>}

        {option == true &&
          <div className={styles.cardGeral}>
            <div className={styles.card2}>
              <div className={styles.header}>
                <div className={styles.row_Info}>
                  <div className={styles.avatar}>
                    <img src={user?.prefs?.avatar} />
                  </div>
                  <div className={styles.info}>
                    <h1>{user?.name}</h1>
                    <h2>{user?.email}</h2>
                  </div>
                  <div className={styles.avaliacao}>
                    <StarIcon />
                    <h1>4.5</h1>
                  </div>
                </div>

                <MoreVertIcon onClick={handleDrawer} />
                <div className={open ? styles.drawerOpen : styles.drawerClosed}>
                  <ul>
                    <li onClick={() => setOption(false)}>Editar</li>
                    <li>Editar</li>
                    <li
                      onClick={() => setOption(true)}
                    >Historico</li>
                    <li
                      onClick={handleLogout}
                    >Sair</li>
                  </ul>
                </div>
              </div>


              <div className={styles.inform}>

                <div className={styles.pedido}>
                  <h1> Pedido </h1>
                  <h2>09898</h2>
                </div>
                <div className={styles.pedido}>
                  <h1> Pedido </h1>
                  <h2>09898</h2>
                </div>
                <div className={styles.pedido}>
                  <h1> Pedido </h1>
                  <h2>09898</h2>
                </div>
                <div className={styles.pedido}>
                  <h1> Pedido </h1>
                  <h2>09898</h2>
                </div>
              </div>


              <div className={styles.line_info}>
                <span> {pedido.saida} </span>
                <GpsFixedIcon />
                <div className={styles.line}> </div>
                <PlaceIcon />
                <span> {pedido.destino} </span>
              </div>
            </div>
            <div className={styles.row_history}>
              <button>Finalizado</button>
              <button>Cancelado</button>
              <button> Pendente </button>
              <button>Todos</button>
            </div>

            <div className={styles.body_history}>
              <div className={styles.card_history}>
                <div className={styles.veic}>
                  <img src="../assets/images/image-freteme-truck.png" />
                  <h1>{user.veiculo}</h1>
                </div>
                <div className={styles.data}>
                  <h1>{pedido.data}</h1>
                  <h2>{pedido.distancia}</h2>
                </div>
                <div className={styles.valor}>
                  <h1>A pagar</h1>
                  <h2>R$ 100,00</h2>
                </div>
              </div>
            </div>

          </div>
        }
      </div>
    </div>








  )
}


export default Profile1
