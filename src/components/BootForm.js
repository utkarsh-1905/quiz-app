import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


export const FormBt = () => {
    return(
        <React.Fragment className="container-fluid">
            <form>
                <div className="form-group my-3">
                    <label for="numberQ" className="txt">Number of Questions</label>
                    <input type="number" className="form-control shadow-none bg-transparent text-white mx-2" min="5" max="10" id="numberQ" aria-describedby="number" placeholder="5" />
                </div>
                <div className="form-group my-3">
                    <label for="selectType" className="txt">Select Topic</label>
                    <select className="form-control shadow-none" id="selectType">
                        <option value="react" >React.js</option>
                        <option value="cpp" >C++</option>
                        <option value="js" >JavaScript</option>
                        <option value="html" >HTML</option>
                        <option value="css" >CSS</option>
                        <option value="custom" >Custom</option>
                    </select>
                </div>
                <div align="right">
                    <button className="btn btn-outline-warning">Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}