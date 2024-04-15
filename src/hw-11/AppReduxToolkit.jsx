import {useEffect, useState} from "react";
import "./index.css"
import {useSelector} from "react-redux";

function AppReduxToolkit() {
    const [searchValue, setSearchValue] = useState('');
    const {loading, error, films} = useSelector(state => state.search.value);

    useEffect(() => {
        console.log('loading', loading);
        console.log('films', films);
        console.log('error', error);
    }, [loading, error, films]);

    function changeField(evt) {
        evt.preventDefault();
        setSearchValue(evt.target.value);
    }

    return (
        <div className="searchWrap">
            <h2>Поиск фильмов</h2>
            <div>
                <input
                    value={searchValue}
                    onChange={(evt) => changeField(evt)}
                    className="search"
                />
                <button>Поиск</button>
            </div>
        </div>
    )
}

export default AppReduxToolkit;