import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormBt } from "./components/Form";
import { Title } from "./components/Title";

function App() {
  document.body.style = "background-color: #0F0F0F";
  return (
    <>
      <Title titleName="Quiz" />
      <div className="row mt-5">
        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-1"></div>
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-10 p-5">
          <FormBt />
        </div>
        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-1"></div>
      </div>
    </>
  );
}

export default App;
