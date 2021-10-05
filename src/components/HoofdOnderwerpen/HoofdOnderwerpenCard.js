import React from "react";
import PropTypes from "prop-types";

export default function HoofdOnderwerpenCard(props) {
  return (
    <div>
      <ol>{props.titel}</ol>
      {props.subtitels.map((subtitel) => {
        return <li key={subtitel.Id}>{subtitel.Titel}</li>;
      })}
    </div>
  );
}

HoofdOnderwerpenCard.propTypes = {
  title: PropTypes.string,
};
