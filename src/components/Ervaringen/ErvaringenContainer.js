import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import ErvaringenFormulier from "./ErvaringenFormulier";

export default function ErvaringenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    ErvaringenBody: "",
    ErvaringenReacties: [],
    ErvaringenId: "",
    ReactieGeslacht: "",
    ReactieLeeftijd: "",
    ReactieReactie: "",
    ReactieAbonnement: "",
    ReactieHulpVerlener: "",
  });

  const { ervaringenId } = useParams();
  const qs = require("qs");

  const ervaringenData = qs.stringify({
    geslacht: "j",
    leeftijd: "30",
    body: "test bericht van Brian",
    ervaringID: "396757",
  });

  const ervaringenConfig = {
    method: "post",
    url: `https://api.opvoedenin.nl/api/ervaringen/${396757}/reacties/post`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "true",
    },
    data: ervaringenData,
  };

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const responseBody = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/${ervaringenId}`
      );
      const responseErvaringen = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/${ervaringenId}/reacties`
      );
      setContainerState({
        ErvaringenBody: responseBody.data.Body,
        ErvaringenReacties: responseErvaringen.data,
      });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  });

  const postErvaring = () => {
    try {
      axios(ervaringenConfig);
      console.log(ervaringenConfig);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <ErvaringenFormulier></ErvaringenFormulier>
      Ervaringen
      {containerState.ErvaringenBody && <p>{containerState.ErvaringenBody}</p>}
      Reacties
      {containerState.ErvaringenReacties &&
        containerState.ErvaringenReacties.map((reactie, index) => {
          return (
            <p key={index}>
              {reactie.Body}
              <br></br>
            </p>
          );
        })}
      <button onClick={() => console.log(containerState)}>log</button>
      <button onClick={postErvaring}>post test</button>
    </div>
  );
}
