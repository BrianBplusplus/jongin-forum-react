import React from "react";
import { Link } from "react-router-dom";

export default function SubOnderwerpenCard(props) {
  return (
      <ul className={"SubOnderwerpenUl"}>
        {props.subHeader}
        <li key={props.Id} style={{ display: "flex", justifyContent: "space-between" }}>
          <Link style={{ width: "33%" }} to={`/forum/ervaringen/${props.ervaringenId}`}>
            {props.titel}
          </Link>
          <li style={{ width: "33%", textAlign: "center", listStyle: "none" }}>
            {props.aantalReacties}
          </li>
          <li style={{ width: "33%", textAlign: "center", listStyle: "none" }}>{props.weergaves}</li>
          {/*
          TODO: Datum omzetten naar bijvoorbeeld: "Laatste Reactie 20 dagen geleden ipv een datum"
          <p>Laatste reactie: {props.laatsteReactie}</p>*/}
        </li>
      </ul>
  );
}
