import {useEffect, useState} from "react";
import axios from "axios";
import "../index.css"
import Details from "./Details.jsx";

function List() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState({
        id: 0, name: '', avatar: '', details: null
    });
    const [userId, setUserId] = useState(0);
    const [isLoadingInfo, setLoadingInfo] = useState(false)

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if(userId !== 0) {
            getUserDetails(userId);
        }
    }, [userId]);

    async function getUsers () {
        try {
            setLoading(true);
            await axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
                .then((data) => setUsers(data.data));
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }

    async function getUserDetails(id) {
        try {
            setLoadingInfo(true);
            await axios.get(` https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                .then((data) => {
                    console.log(data.data)
                    setInfo(data.data)

                });
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoadingInfo(false);
        }
    }

    return (
        <div className="details-list">
            {isLoading ?
                <span>loading...</span> :
                <>
                    <ul>
                        {users.map(user => {
                            return <li key={user.id} className="list-item">
                                <button
                                    className="list-item-btn"
                                    onClick={() => setUserId(user.id)}
                                >
                                    {user.name}
                                </button>
                            </li>
                        })}
                    </ul>
                    {userId !== 0 ? <Details info={info} /> : <div>{isLoadingInfo ? 'loading...' : ''}</div>}
                </>
            }
        </div>
    )
}

export default List;