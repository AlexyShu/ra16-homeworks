import {useEffect, useState} from "react";
import "../../index.css"
import axios from "axios";

function CRUD() {
    const [cards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [content, setContent] = useState('')

    useEffect(() => {
        getNotes()
    }, [])

    function getNotes() {
        axios('http://localhost:7070/notes')
            .then((data) => {
                setCards(data.data)
            })
            .finally(() => setLoading(false))

    }

    function setNotes() {
        return axios({
            method: 'post',
            url: 'http://localhost:7070/notes',
            data: {
                "id": crypto.randomUUID(),
                "content": content,
            }
        });
    }

    function changeField(evt) {
        evt.preventDefault();
        setContent(evt.target.value)
    }

    function onSubmit(evt) {
        evt.preventDefault();
        setNotes().then(() => getNotes())
    }

    function deleteNote(item) {
        const actualCard = cards.find((card) => card.content === item);
        console.log(actualCard)
        axios({
            method: 'delete',
            url: `http://localhost:7070/notes/${actualCard.id}`,
        }).then(() => getNotes());
    }

    return (
        <div>
            {isLoading ? <div>Loading...</div> :
                <>
                    <form className="noteForm" onSubmit={(evt) => onSubmit(evt)}>
                        <h4>New Note</h4>
                        <textarea
                            className="field"
                            onChange={(evt) => changeField(evt)}
                            value={content}/>
                        <button type="submit">Add note</button>
                    </form>
                    <div className="updateNotes">
                        <h3>Notes</h3>
                        <button
                            className="update"
                            type="button"
                            onClick={() => getNotes()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>
                    </div>
                    <div className="cards">
                        {cards.map((card) => {
                            return <div className="card" key={card.id}>
                                <span>{card.content}</span>
                                <button
                                    className="remove deleteCard"
                                    type="button"
                                    onClick={() => deleteNote(card.content)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={14} height={14}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        })}
                    </div>
                </>}
        </div>
    )
}

export default CRUD;