import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../actions/actionCreators";
import { InitialState } from '../reducers/skills';

export default function Skills() {
    const state = useSelector(state => state);

    const { items, loading, error, search } = state as InitialState

    const dispatch = useDispatch()

    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    }

    const hasQuery = search.trim() !== ""

    return (
        <main>
            <div>
                <input type="search" value={search} onChange={handleSearch} />
            </div>
            {!hasQuery && <div>Type something to search</div>}
            {hasQuery && loading && <div>searching...</div>}
            {error ? (
                <div>Error occured</div>
            ) : (
                <ul>
                    {items.map((o) => (
                        <li key={o.id}>{o.name}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}
