import { createSlice } from "@reduxjs/toolkit";
 

const ServiceSlice = createSlice({
  name: "service",
  initialState: {
    service: {
      origin: null,
      destination: null,
      location: null ,
      distance: 0,
      value: "",
      id: "",
      servico: "",
      helpers: 0,
      latitude : null,
      longitude : null,
      mounters: 0,
      hours: 0,
      originPlace: "",
      destinationPlace: "",
      routeGeoJSON: null,
      details: '',
      labelLocation: null,
   
      onLoad: null
    },

    
  },

  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    },
  },
});

export const { setService } = ServiceSlice.actions;

export default ServiceSlice.reducer;
