import React from "react";
import Header from "@/components/Header";
import styles from "./Layout.module.sass";

export default function Layout({ children }) {
  return (
    <>

      <div className={styles.container}>{children}</div>
    </>
  );
}
