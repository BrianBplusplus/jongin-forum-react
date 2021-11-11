import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function HoofdOnderwerpenCard(props) {
  return (
    <div className={"ForumHoofdOnderwerpenContainer"}>
      <ul className={"ForumHoofdOnderwerpenTitel"}>{props.titel}</ul>
      {props.subtitels.map((subtitel) => {
        return (
          <div className={"ForumHoofdOnderwerpenLinks"} key={subtitel.Id}>
            <NavLink className={"ForumHoofdOnderwerpenA"} to={`/subonderwerpen/${subtitel.Id}`}>
              {subtitel.Titel}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

HoofdOnderwerpenCard.propTypes = {
  titel: PropTypes.string,
};
