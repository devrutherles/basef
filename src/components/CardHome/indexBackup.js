import React, { Profiler, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./CardHome.module.sass";
const avatar = require("../../images/avatar.jpg");
import ButtonNavigation from '../BottonNavigation'

import { styled } from '@mui/material/styles';
import { CloseRounded } from "@mui/icons-material";
import OriginDestination from "./OriginDestination";
import { Button, IconButton } from "@mui/material";
import cn from 'classnames'
import Paper from '@mui/material/Paper';
//import Service from '../CardService/Service'
import Service from '../Services'


const CardHome = (props) => {

  const {
    handleService,
    service,
    config,
    app,
    user,

    latitude,
    longitude,
    myLocation,
    setNewLocation,
    height,
    formHeight,
    handleOpen,
    handleClose,
    handleApp

  } = props


  const { step, isOpen } = app








  const divRef = useRef()



  return (

    <>





      <Paper elevation={3} data-isopen={isOpen} data-step={step} className={cn(styles.card)}>

        <div className={styles.container}>

          {step == 1 && (
            <OriginDestination

              service={service}
              handleService={handleService}
              handleApp={handleApp}

              app={app} />

          )}



          {step == 2 && (
            <Service

              service={service}
              handleService={handleService}
              handleApp={handleApp}
              config={config}

              app={app} />

          )}

{ 1==9 &&
          (<div className={styles.tab}>
            <ButtonNavigation />
          </div>)
}








        </div>



        <div className={styles.header}>


        <Paper data-isopen={isOpen} elevation={3} className={styles.notifications} >

<div data-isopen={isOpen} className={cn(styles.small)}>

  <span>


    Para ter uma melhor experiencia

  </span>


  <div className={styles.close}>

  <IconButton onClick={() => handleApp({
    ...app,
    isOpen: !isOpen

  })}>
    <CloseRounded />
  </IconButton>


 </div>


</div>


<div className={styles.block}>

  <div className={styles.header_card2}>
    <span>
      Para ter uma melhor experiencia

    </span>





    <p>
      Por favor ative a permissção da localização

    </p>

  </div>


  <button className={styles.btn_1} id='btn_1'>
    Permitir
  </button>



</div>



<div className={styles.container_footer}>
  <div>
    
  </div>

</div>







</Paper>

        </div>





      </Paper>



    </>

  );


}

export default CardHome