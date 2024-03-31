import {useJsonFetch} from "./hooks/useJsonFetch.jsx";
import {useEffect} from "react";

function HW_8_2() {
    const [successData, successLoading, successError] = useJsonFetch('http://localhost:7070/data', {status: ''});
    const [errorData, errorLoading, errorError] = useJsonFetch('http://localhost:7070/error', {status: ''});
    const [loadingData, loadingLoading, loadingError] = useJsonFetch('http://localhost:7070/loading', {status: ''});

    return <div>
        <div>{successLoading ? 'loading...' : `Success: ${successData.status}`}</div>
        <div>{errorLoading ? 'loading...' : `${errorError}`}</div>
        <div>{loadingLoading ? 'loading...' : `Success: ${loadingData.status}`}</div>
    </div>
}

export default HW_8_2;