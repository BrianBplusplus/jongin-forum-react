import React from "react";
import { Link } from "react-router-dom";

export default function SubOnderwerpenCard(props) {
  return (
    <div>
      <ul>
        {props.subHeader}
        <div key={props.Id} style={{ display: "flex", justifyContent: "space-between" }}>
          <Link style={{ width: "33%" }} to={`/forum/ervaringen/${props.ervaringenId}`}>
            {props.titel}
          </Link>
          <div style={{ width: "33%", textAlign: "right" }}>
            Aantal reacties: {props.aantalReacties}
          </div>
          <div style={{ width: "33%", textAlign: "right" }}>Weergaves: {props.weergaves}</div>
          {/*
          TODO: Datum omzetten naar bijvoorbeeld: "Laatste Reactie 20 dagen geleden ipv een datum"
          <p>Laatste reactie: {props.laatsteReactie}</p>*/}
        </div>
      </ul>
    </div>
  );
}
