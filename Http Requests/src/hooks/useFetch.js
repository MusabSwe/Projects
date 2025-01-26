import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState(initialValue);


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const placesToVisit = await fetchFn();
                setData(placesToVisit);
            } catch (error) {
                setError(error?.message ? error?.message : 'Faild to fetch data');
            }
            setIsLoading(false);
        }
        fetchData();
    }, [fetchFn])

    // states
    return { isLoading, data, setData, error }
}