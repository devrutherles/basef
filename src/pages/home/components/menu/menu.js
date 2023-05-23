import React from "react";
import styles from "./menu.module.sass";
import { Button, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountMenu from "./perfilbtn";

const Sidebar = () => {
  return (


    <div className={styles.menu}>
<div className={styles.logo}>
    <img
    src="../../images/logo.png"
    />
</div>   
       <button>
        <HomeIcon
        className={styles.botao}
        />    
        </button>
        <button>
        <HomeIcon
        className={styles.botao}
        />    
        </button>
        <button>
        <HomeIcon
        className={styles.botao}
        />    
        </button>
        <button>
        <HomeIcon
        className={styles.botao}
        />    
        </button>
        <div className={styles.setting}>
        <Link className={styles.row_settings}
        href="../">
        <SettingsIcon
      className={styles.setting_icon}
        /> Ajustes
              </Link>
             
              <Link className={styles.row_logout}
        
                 href="../../login">
        <LogoutIcon
        className={styles.logout_icon}/>
        
        Sair
       
      
        </Link> 
        </div>
       
        </div>
      


  );
};

export default Sidebar;
