import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import changeList from "../redux/changeList.js";

function Search() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const {list} = useSelector((state) => state.reducer);

    useEffect(() => {
        if(list.find(item => item.value === searchValue) !== undefined ||
            list.find(item => item.count === searchValue) !== undefined) {
            const newList = list.filter(item => item.value === searchValue ||
                item.count === searchValue)
            dispatch(changeList(newList))
        }
    }, [searchValue]);

    function changeField(evt) {
        evt.preventDefault();
        setSearchValue(evt.target.value);
    }

    return (
        <div>
            <span>Поиск: </span>
            <input
                value={searchValue}
                onChange={(evt) => changeField(evt)}
                className="search"
            />
        </div>
    )
}

export default Search;