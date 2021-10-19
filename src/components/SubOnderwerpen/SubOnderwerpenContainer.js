import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SubOnderwerpenCard from "./SubOnderwerpenCard";

export default function SubOnderwerpenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    apiData: [],
    tempInfo: "",
  });

  const { subonderwerpenId } = useParams();

  const fetchApi = useCallback(async () => {
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
  });

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      SubOnderwerpen
      {containerState.apiData &&
        containerState.apiData.map((mappedApiData) => {
          return (
            <SubOnderwerpenCard
              key={mappedApiData.ForumErvaring.Id}
              titel={mappedApiData.ForumErvaring.Titel}
              ervaringenId={mappedApiData.ForumErvaring.Id}
            />
          );
        })}
    </div>
  );
}
