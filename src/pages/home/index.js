import { useEffect, useRef, useState } from "react";
import styles from "./style.module.sass";
import Map2 from "./components/Map2";
import { useSelector, useDispatch } from "react-redux";
import { setService } from "@/context/serviceSlice";
import { setApp } from "@/context/appSlice";
import useHandleConfig from "@/hooks/useConfig";
import useHandleNotification from "@/hooks/useNotification";
import useHandleService from "@/hooks/useService";
import { toName } from "@/libs/utils";
import getMylocation from "@/utils/getMylocation";
import CardHome from "@/components/CardHome";
import CardNotification from '@/components/CardNotification'
import { Paper } from "@mui/material";
import CardServices from './CardServises'
import ButtonNavigation from '../../components/BottonNavigation'
const Index = () => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);
  const app = useSelector((state) => state.app.app);

  const { origin, destination, location, onLoad } = service;
  const { isOpen, step } = app
  const divRef = useRef();
  const avatar = require('../../images/avatar.jpg')
  const { config } = useHandleConfig();
  const { notification } = useHandleNotification();
  const { user } = useHandleService();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [routeGeoJSON, setRouteGeoJSON] = useState(null);
  const [formHeight, setFormHeight] = useState(null);
  const [back, setBack] = useState(true);
  const [myLocation, setMyLocation] = useState("")
  const [newLocation, setNewLocation] = useState(null)
  const [cardHeight, setCardHeight] = useState({height:null,width:null})
  const cardRef = useRef(null)
  const[resize,setResize] = useState(true)


  

  useEffect(() => {
    if (divRef.current) {
      const { clientHeight , clientWidth } = divRef.current;
     

      setCardHeight({height: clientHeight , width: clientWidth });
    }
  }, [divRef,resize, isOpen, step]);

  console.log(config)



  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        if (!location || !service)
          return;
        dispatch(setService({ location: [longitude, latitude], latitude: latitude, longitude: longitude }));
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    };
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (!longitude || myLocation.length > 0)
      return;
    const getMyloc = async () => {
      const myloc = await getMylocation(latitude, longitude)
      if (!myloc)
        return;
      setMyLocation(myloc[0].properties.name)
      dispatch(setService({ location: [longitude, latitude], latitude, longitude }));
    }
    getMyloc();


  }, [longitude, latitude])

  const handleService = (dados) => {
    dispatch(setService({ ...service, ...dados }));
  };

  const handleApp = (dados) => {
    dispatch(setApp({ ...app, ...dados }));
  };

  const handleOpen = () => {

    console.log(isOpen)

    dispatch(setApp({ ...app, isOpen: true }))


  }



  const handleClose = () => handleApp({ isOpen: false, step: 1 });

  return (

    <div onResize={()=> setResize('tru')}  className={styles['home']}>

      <div onResize={()=> setResize('ttt')} ref={divRef} className={styles.map}>
        <Map2
          cardHeight={cardHeight}
          setNewLocation={setNewLocation}
          service={service}
          formHeight={formHeight}
          handleService={handleService}
          step={2}
          app={app}
          myLocation={myLocation}
          config={config}
          latitude={latitude}
          longitude={longitude}
          user={user && user.name && toName(user.name)}
        />


      </div>


      <div data-isopen={isOpen} className={styles.card}>

        <CardHome
          handleService={handleService}
          service={service}
          step={app.step}
          myLocation={myLocation}
          app={app}
          isOpen={isOpen}
          config={config}
          handleOpen={handleOpen}
          handleClose={handleClose}
          latitude={latitude}
          longitude={longitude}
          setNewLocation={setNewLocation}
          formHeight={formHeight}
          handleApp={handleApp}
          user={user}
        />

      </div>
    </div>




  )
}

export default Index;
