"use client";

import { Server, Sheet } from "styletron-engine-atomic";
import { styletron } from "../styletron";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

function MyDocument( ) {
  return (
    <Html>
      <Head>

      <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
  
  
      </Head>
      <body>

        <Main />
        <NextScript />

      </body>
    </Html>
  );
}



export default MyDocument;
