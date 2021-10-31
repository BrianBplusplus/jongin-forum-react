import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ErvaringenFormulier from "./ErvaringenFormulier";

export default function ErvaringenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    geslacht: containerState.ReactieGeslacht,
    leeftijd: containerState.ReactieLeeftijd,
    body: containerState.ReactieReactie,
    ervaringID: containerState.ErvaringenId,
    UserEmail: containerState.ReactieAbonnement,
    SendToHelpEmail: containerState.ReactieHulpVerlener,
  });

  const ervaringenConfig = {
    method: "post",
    url: `https://api.opvoedenin.nl/api/ervaringen/${containerState.ErvaringenId}/reacties/post`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: ervaringenData,
  };

  const fetchApi =  async () => {
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
        ErvaringenId: responseBody.data.Id,
        ErvaringenReacties: responseErvaringen.data,
      });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  const postErvaring = () => {
    axios(ervaringenConfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsSubmitted(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchApi();
  });

  return (
    <div>
      <h2> Ervaringen </h2>
      {containerState.ErvaringenBody && <p>{containerState.ErvaringenBody}</p>}
      <h2> Reacties </h2>
      {containerState.ErvaringenReacties &&
        containerState.ErvaringenReacties.map((reactie, index) => {
          return (
            <div key={index} dangerouslySetInnerHTML={{__html: reactie.Body}} />
          );
        })}

      {!isSubmitted && (
        <ErvaringenFormulier
          containerState={containerState}
          setContainerState={setContainerState}
          postErvaring={postErvaring}
        ></ErvaringenFormulier>
      )}
    </div>
  );
}
