import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ErvaringenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    apiData: [],
    ErvaringenBody: "",
    ErvaringenReacties: [],
    tempInfo: "",
  });

  const { ervaringenId } = useParams();

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

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
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
    </div>
  );
}
