import { Add, Remove } from "@mui/icons-material";
import { memo, useState } from "react";
import styles from "./card-details1.module.sass";
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import { Divider } from "@mui/material";
import NewSelect from '../NewSelect'
import Image from "next/image";
const CardDetail2 = (props) => {

  const { service, app, handleApp, handleService } = props



  const decrementHel = () => {

    if (service.helpers > 0) {

      handleService({
        helpers: service.helpers - 1
      })




    }

  };


  const decrementHou = () => {

    if (service.hours > 0) {

      handleService({
        hours: service.hours - 1
      })




    }

  };

  const incrementHel = () => {

    if (service.helpers < 10) {

      handleService({
        helpers: service.helpers + 1
      })




    }

  };


  const incrementHou = () => {

    if (service.hours < 10) {

      handleService({
        hours: service.hours + 1
      })




    }

  };

  console.warn(service)


  return (


    <div className={styles.card_details}>


 

        {service.id != 3 && (
          <div className={styles.row_details}>
            <div className={styles.icon}>
              <GroupAddTwoToneIcon

                alt=""
                src="/vuesaxlinearwallet3.svg"
              />
            </div>
            <div className={styles.label}>
              <p>Ajudantes</p>
            </div>
            <div className={styles.soma}>
              <div className={styles.btn_soma}>
                <button onClick={() => decrementHel()}>
                  <Remove />
                </button>
                {<b>{service.helpers}</b> }

                <button onClick={() => incrementHel()}>
                  <Add />
                </button>

              </div>
            </div>
          </div>)}


        {service.id == 2 && (<div className={styles.row_details}>
          <div className={styles.icon}>
            <AccessTimeTwoToneIcon


            />
          </div>
          <div className={styles.label}>
            <p>Horas</p>
          </div>
          <div className={styles.soma}>
            <div className={styles.btn_soma}>
              <button onClick={() => decrementHou()}>
                <Remove />
              </button>
              <b>{service.hours}</b> 
              <button onClick={() => incrementHou()}>
                <Add />
              </button>

            </div>
          </div>
        </div>)}

        {
          /*
                 <div className={styles.location}>
                   <div className={styles.location_content}>
                     <div className={styles.icon}>
         
                       <Image width={30} height={80} alt='' src={require('../../images/location.svg')} />
         
                     </div>
         
                     <div className={styles.location_destination}>
         
                       <input type={'text'} value="rua maria de belem" />
                       <input type={'text'} value="rua maria de belem" />
                     </div>
         
                     <div className={styles.location_destination}>
         
                       <button>editar</button>
                       <button>editar</button>
                     </div>
         
         
         
                   </div>
         
         
                 </div>
               */

        }
    
    </div>
  );
};

export default CardDetail2;
