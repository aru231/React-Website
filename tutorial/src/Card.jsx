import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <React.Fragment>
      <div className="col-sm-4 col-10 mx-auto">
        <div className="card" style={{ width: "23rem" }}>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to={props.link} className="btn btn-primary">
              {props.title}
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
