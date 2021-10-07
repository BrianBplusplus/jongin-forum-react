import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import SubOnderwerpenCard from "./SubOnderwerpenCard";

export default function SubOnderwerpenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    apiData: [],
    tempInfo: "",
  });

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(
        `https://api.opvoedenin.nl/api/ervaringen/subonderwerpen/16`
      );
      console.log(response.data);
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
            />
          );
        })}
    </div>
  );
}
