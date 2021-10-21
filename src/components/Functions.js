export const fetchApi = useCallback(async (url) => {
  //setIsLoading(true);
  //setIsError(false);
  try {
    // const response = await axios.get(`https://api.opvoedenin.nl/api/hoofdonderwerpen/`);
    const response = await axios.get(url);
    console.log(response);
    setContainerState({
      apiData: response.data,
    });
  } catch (error) {
    //  setIsError(true);
    console.error(error);
  }
  //setIsLoading(false);
});
