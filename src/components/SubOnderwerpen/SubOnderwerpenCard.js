import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SubOnderwerpenCard(props) {
  return (
    <div>
      <ul>
        {props.subHeader}
        <li key={props.Id}>
          <Link to={`/ervaringen/${props.ervaringenId}`}> {props.titel} </Link>
        </li>
      </ul>
    </div>
  );
}

SubOnderwerpenCard.propTypes = {};
