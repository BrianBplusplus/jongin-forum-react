import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HoofdOnderwerpenCard(props) {
  return (
    <div>
      <ol>{props.titel}</ol>
      {props.subtitels.map((subtitel) => {
        return (
          <button key={subtitel.Id}>
            <Link to={`/jongin-forum/subonderwerpen/${subtitel.Id}`}>{subtitel.Titel}</Link>
          </button>
        );
      })}
    </div>
  );
}

HoofdOnderwerpenCard.propTypes = {
  titel: PropTypes.string,
};
