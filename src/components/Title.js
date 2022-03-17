import React from "react";

export const Title = (props) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6" align="center">
          <h1 className="display-1 text-warning undl">{props.title}</h1>
        </div>
        <div className="col-3"></div>
      </div>
    </>
    // <div className="row mt-5">Hello World</div>
  );
};
