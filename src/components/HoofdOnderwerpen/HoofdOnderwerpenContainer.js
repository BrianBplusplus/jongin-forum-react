import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import HoofdOnderwerpenCard from "./HoofdOnderwerpenCard";

export default function HoofdOnderwerpContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    apiData: [],
  });

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`https://api.opvoedenin.nl/api/hoofdonderwerpen/`);
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
      <h2>HoofdOnderwerpen</h2>
      {containerState.apiData &&
        containerState.apiData.map((mappedApiData) => {
          return (
            <HoofdOnderwerpenCard
              key={mappedApiData.Id}
              titel={mappedApiData.Titel}
              subtitels={mappedApiData.SubOnderwerpen}
            />
          );
        })}
    </div>
  );
}
