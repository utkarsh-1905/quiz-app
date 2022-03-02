import React from "react";

export const Title = (prop) => {
    return(
        <React.Fragment>
            <div className = "row mt-5">
                <div className="col-3"></div>
                <div className="col-6" align="center">
                    <h1 className="display-1 text-warning undl">{ prop.title }</h1>
                </div> 
                <div className="col-3"></div>
            </div>
        </React.Fragment>
    )
}