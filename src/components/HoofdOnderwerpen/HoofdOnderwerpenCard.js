import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HoofdOnderwerpenCard(props) {
  return (
    <div>
      <ol>{props.titel}</ol>
      {props.subtitels.map((subtitel) => {
        return (
          <li key={subtitel.Id}>
            <Link to="/">{subtitel.Titel}</Link>
          </li>
        );
      })}
    </div>
  );
}

HoofdOnderwerpenCard.propTypes = {
  titel: PropTypes.string,
};
