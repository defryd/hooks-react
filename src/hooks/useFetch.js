import { useEffect, useState } from "react";

const localCache = {

};

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoadin: true,
      hasError: false,
      error: null,
    });
  }

  const getFetch = async () => {

    if (localCache[url]) {
      console.log('Usando cache');
      setState({
        data: localCache[url],
        isLoadin: false,
        hasError: false,
        error: null
      })
      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    // sleep
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    // manejo de cache para no recargar
    localCache[url] = data;

    // console.log(data);
  };

  return {
    data: state.data,
    isLoadin: state.isLoadin,
    hasError: state.hasError,
  };
};
