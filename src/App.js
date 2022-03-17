import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormBt } from "./components/Form";
import { Title } from "./components/Title";
import styles from "./App.module.css";

function App() {
  document.body.style = "background-color: #0F0F0F";
  return (
    <>
      <Title title="Quiz" />
      <div className={styles.form}>
        <FormBt />
      </div>
    </>
  );
}

export default App;
