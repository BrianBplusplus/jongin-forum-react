import React from "react";
import PropTypes from "prop-types";

export default function SubOnderwerpenCard(props) {
  return (
    <div>
      <ul>
        {props.subHeader}
        <li key={props.Id}>{props.titel}</li>
      </ul>
    </div>
  );
}

SubOnderwerpenCard.propTypes = {};
