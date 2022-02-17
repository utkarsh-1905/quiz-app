import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };

  return (
    <>
      <form className={styles.quizForm} onSubmit={formSubmitHandler}>
        <label className={styles.formLabel} htmlFor="question">
          Number of Questions
        </label>
        <input
          className={styles.formElements}
          type={"number"}
          id="question"
          placeholder={"5"}
        />
        <label className={styles.formLabel} htmlFor="type">
          Ask me anything about
        </label>
        <select className={styles.formElements} name="type" id="type">
          <option value="react">React.js</option>
          <option value="cpp">C++</option>
          <option value="js">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <button className={styles.formButton}>Start</button>
      </form>
    </>
  );
};

export default Form;
