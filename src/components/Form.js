// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styles from "./Form.module.css";

export const FormBt = () => {
  const submitFormHandler = async (e) => {
    e.preventDefault();
    const numberOfQues = e.target[0].value;
    const type = e.target[1].value;
    const body =
      encodeURIComponent("number") +
      "=" +
      encodeURIComponent(numberOfQues) +
      "&" +
      encodeURIComponent("type") +
      "=" +
      encodeURIComponent(type);
    console.log(type, numberOfQues);
    const startQuiz = await fetch("http://localhost:3005/start", {
      method: "post",
      mode: "cors",
      body: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const questions = await startQuiz.json();
    console.log(questions);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitFormHandler}>
        <div className="form-group my-3">
          <label htmlFor="numberQ" className="txt">
            Number of Questions
          </label>
          <input
            type="number"
            className="form-control shadow-none bg-transparent text-white mx-2"
            min="5"
            max="10"
            id="numberQ"
            aria-describedby="number"
            placeholder="5"
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="selectType" className="txt">
            Select Topic
          </label>
          <select className="form-control shadow-none px-3" id="selectType">
            <option value="react">React.js</option>
            <option value="cpp">C++</option>
            <option value="js">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </div>
        <div align="right">
          <button className="btn btn-outline-warning">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};
