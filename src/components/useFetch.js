import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortControl = new AbortController();

        // setTimeout(() => {
        // }, 1000);
        const getData = async () => {
            try {
                const res = await fetch(url, { signal: abortControl.signal });
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }

                const data = await res.json();
                setData(data);
                setIsLoading(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setError(err.message);
                    setIsLoading(false);
                    console.log(err.message);
                }
            }
        }
        getData();

        return () => abortControl.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;