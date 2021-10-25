import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SubOnderwerpenCard(props) {
  return (
    <div>
      <ul>
        {props.subHeader}
        <button key={props.Id}>
          <Link to={`/jongin-forum/ervaringen/${props.ervaringenId}`}> {props.titel} </Link>
        </button>
      </ul>
    </div>
  );
}

SubOnderwerpenCard.propTypes = {};
