import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SubOnderwerpenCard from "./SubOnderwerpenCard";
import SubOnderwerpenFormulier from "./SubOnderwerpenFormulier";

export default function SubOnderwerpenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [containerState, setContainerState] = useState({
    apiData: [],
    SubOnderwerpId: "",
    SubOnderwerpGeslacht: "",
    SubOnderwerpLeeftijd: "",
    SubOnderwerpTitel: "",
    SubOnderwerpReactie: "",
    SubOnderwerpOnderwerp: "",
    SubOnderwerpAbonnement: "",
    SubOnderwerpCheckBox: true,
    SubOnderwerpHulpVerlener: "",
  });

  const { subonderwerpenId } = useParams();

  const qs = require("qs");
  const subOnderwerpenData = qs.stringify({
    geslacht: containerState.SubOnderwerpGeslacht,
    leeftijd: containerState.SubOnderwerpLeeftijd,
    body: containerState.SubOnderwerpReactie,
    titel: containerState.SubOnderwerpTitel,
    subonderwerpId: containerState.SubOnderwerpOnderwerp,
    UserEmail: containerState.SubOnderwerpAbonnement,
    sendtohelpemail: containerState.SubOnderwerpHulpVerlener,
  });

  const subOnderwerpenConfig = {
    method: "post",
    url: `https://api.opvoedenin.nl/api/ervaringen/`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: subOnderwerpenData,
  };

  const fetchApi = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/subonderwerpen/${subonderwerpenId}`
      );
      setContainerState({
        apiData: response.data,
      });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  const postSubOnderwerp = () => {
    axios(subOnderwerpenConfig)
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
    <div className={"ForumSubOnderwerpenContainer"}>
      <h2 className={"SubOnderwerpenTitel"}>
        <span id={"SubOnderwerpenTitelInner"} className={"SubOnderwerpenTitelSpan"}>
          Titel
        </span>
        <span className={"SubOnderwerpenTitelSpan"}>Reacties</span>
        <span className={"SubOnderwerpenTitelSpan"}>Weergaves</span>
      </h2>
      {containerState.apiData &&
        containerState.apiData.map((mappedApiData) => {
          return (
            <SubOnderwerpenCard
              key={mappedApiData.ForumErvaring.Id}
              titel={mappedApiData.ForumErvaring.Titel}
              ervaringenId={mappedApiData.ForumErvaring.Id}
              aantalReacties={mappedApiData.AantalReacties}
              weergaves={mappedApiData.ViewCount}
              laatsteReactie={mappedApiData.LaatsteReactieString}
            />
          );
        })}

      {!isSubmitted && (
        <SubOnderwerpenFormulier
          containerState={containerState}
          setContainerState={setContainerState}
          postSubOnderwerp={postSubOnderwerp}
        ></SubOnderwerpenFormulier>
      )}
      <button onClick={() => console.log(containerState)}>containerstate</button>
    </div>
  );
}
