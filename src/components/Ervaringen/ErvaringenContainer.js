import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function ErvaringenContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [containerState, setContainerState] = useState({
    apiData: [],
    ErvaringenBody: "",
    tempInfo: "",
  });

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`https://api.opvoedenin.nl/api/ervaringen/396757/`);
      console.log(response.data);
      setContainerState({
        ErvaringenBody: response.data.Body,
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
      ErvaringenContainer
      {containerState.ErvaringenBody && <p>{containerState.ErvaringenBody}</p>}
      <button onClick={() => console.log(containerState.ErvaringenBody)}>log</button>
    </div>
  );
}
