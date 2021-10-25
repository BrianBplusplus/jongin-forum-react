import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SubOnderwerpenCard(props) {
  return (
    <div>
      <ul>
        {props.subHeader}
        <div key={props.Id}>
          <Link to={`/jongin-forum/ervaringen/${props.ervaringenId}`}> {props.titel} </Link>
        </div>
      </ul>
    </div>
  );
}

SubOnderwerpenCard.propTypes = {};
