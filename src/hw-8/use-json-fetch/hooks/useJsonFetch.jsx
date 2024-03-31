import {useEffect, useState} from "react";

export const useJsonFetch = (url, initialData) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setData(data);
                setError(null);
            } catch (e) {
                if (e instanceof Error) setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [data, isLoading, hasError];
};
