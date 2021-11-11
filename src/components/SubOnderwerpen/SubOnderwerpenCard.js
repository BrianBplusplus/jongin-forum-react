import React from "react";
import { Link } from "react-router-dom";

export default function SubOnderwerpenCard(props) {
  return (
    <ul className={"SubOnderwerpenUl"}>
      {props.subHeader}
      <li key={props.Id} style={{ display: "flex", justifyContent: "space-between" }}>
        <Link style={{ width: "25%" }} to={`/ervaringen/${props.ervaringenId}`}>
          {props.titel}
        </Link>
        <li style={{ width: "25%", textAlign: "center", listStyle: "none" }}>
          {props.aantalReacties}
        </li>
        <li style={{ width: "25%", textAlign: "center", listStyle: "none" }}>{props.weergaves}</li>

        <li style={{ width: "25%", textAlign: "center", listStyle: "none", fontSize: "15px" }}>
          {props.laatsteReactie}
        </li>
      </li>
    </ul>
  );
}
