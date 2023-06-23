import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import OriginDestination from "./OriginDestination";
import { IconButton, Paper } from '@mui/material';
import styles from "./CardHome.module.sass";
import cn from 'classnames'
import { CloseRounded } from '@mui/icons-material';
import { useRef } from 'react';
import Service from '../Services'
import Order from '../Services/Order';
import ButtonNavigation from '../BottonNavigation'
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

  const divRef = useRef(null)
  console.warn(app)
  console.warn(service)

  return (
    <Box




    >

      <div data-isopen={isOpen} className={styles.notifications} >




        <div className={styles.block}>


          <div className={styles.header_card2}>




            <p>
              Por favor ative a permissção da localização

            </p>

          </div>


          <button className={styles.btn_1} id='btn_1'>
            Permitir
          </button>



        </div>









      </div>




      <Card

        sx={{

          width: '100%',
          backgroundColor: '#fff',

        }}
        className={styles.card}
        data-isopen={isOpen}
      >


        <CardContent
          data-step={step}

          sx={{

            background: '#fff',





          }}

        >

          <div
            data-isopen={isOpen}>

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

            )

            }


            {step == 3 && (



              <Order

                service={service}
                handleService={handleService}
                handleApp={handleApp}
                config={config}
                app={app} />

            )}






          </div>


        </CardContent>
        <div data-isopen={isOpen} className={styles.tab}>
          <ButtonNavigation />
        </div>

      </Card>


    </Box>
  );
}

export default CardHome