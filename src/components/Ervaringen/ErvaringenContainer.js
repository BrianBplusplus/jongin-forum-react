import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ErvaringenFormulier from "./ErvaringenFormulier";
import FormSubmitCompleted from "../FormSubmitCompleted";

export default function ErvaringenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [subjectClosed, setSubjectClosed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [containerState, setContainerState] = useState({
    ErvaringenTitel: "",
    ErvaringenGeslacht: "",
    ErvaringenLeeftijd: "",
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

  const fetchApi = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const responseBody = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/${ervaringenId}`
      );
      const responseErvaringen = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/${ervaringenId}/reacties`
      );

      const geslachtVerbose =
        (await responseBody.data.Geslacht) === "j"
          ? "Jongen"
          : responseBody.data.Geslacht === "m"
          ? "Meisje"
          : "X";

      setContainerState({
        ErvaringenTitel: responseBody.data.Titel,
        ErvaringenGeslacht: geslachtVerbose,
        ErvaringenBody: responseBody.data.Body,
        ErvaringenLeeftijd: responseBody.data.Leeftijd,
        ErvaringenId: responseBody.data.Id,
        ErvaringenReacties: responseErvaringen.data,
      });

      if (responseBody.data.IsClosed === true) {
        setSubjectClosed(true);
      }
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
    window.scrollTo(0, 0);
    fetchApi();
  }, []);

  return (
    <div className={"ErvaringenContainer"}>
      <h2 className={"ErvaringenTitel"}>
        {containerState.ErvaringenTitel} - Door {containerState.ErvaringenGeslacht} van{" "}
        {containerState.ErvaringenLeeftijd} Jaar
      </h2>

      {containerState.ErvaringenBody && (
        <p
          className={"ErvaringenBody"}
          dangerouslySetInnerHTML={{ __html: containerState.ErvaringenBody }}
        />
      )}
      <h2 className={"ErvaringenTitel"}> Reacties </h2>
      {containerState.ErvaringenReacties &&
        containerState.ErvaringenReacties.map((reactie, index) => {
          return (
            <div className={"ErvaringenReacties"}>
              <div>
                <strong>
                  {reactie.Geslacht === "j"
                    ? "Jongen"
                    : reactie.Geslacht === "m"
                    ? "Meisje"
                    : "Anders"}{" "}
                  {reactie.Leeftijd}
                </strong>
              </div>
              <div key={index} dangerouslySetInnerHTML={{ __html: reactie.Body }} />
            </div>
          );
        })}

      {isSubmitted && <FormSubmitCompleted />}

      {!isSubmitted && (
        <ErvaringenFormulier
          style={{ transition: "linear 1s" }}
          containerState={containerState}
          setContainerState={setContainerState}
          postErvaring={postErvaring}
        ></ErvaringenFormulier>
      )}
    </div>
  );
}
