import { Provider } from "react-redux";
import store from "@/context/store";
import Layout from "./Layout";
import "../styles/app.sass";
import ServerProvider from "@/server/server";
import AuthProvider from "@/context/auth";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { styletron } from "../styletron";
import { ThemeProvider, createTheme } from "@mui/material";

import React from 'react'
import { StrictMode } from 'react';

export default function App(props) {
  
  const { Component, pageProps } = props;




  return (
    <Provider store={store}>
      <ServerProvider>
        <AuthProvider>
          <StyletronProvider value={styletron}>
           
            
       
              <StrictMode>
                <Component {...pageProps} />
                </StrictMode>
              
             
        
          </StyletronProvider>
        </AuthProvider>
      </ServerProvider>
    </Provider>
  );
}
