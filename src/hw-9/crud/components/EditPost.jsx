import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function EditPost() {
    const [postValue, setPostValue] = useState('');
    const navigate = useNavigate();
    const id = window.location.pathname[window.location.pathname.length - 1];

    function submitPost(evt) {
        evt.preventDefault();
        axios.put(`http://localhost:7070/posts/${id}`, {
            id,
            content: postValue
        })
            .then((response) => {
                navigate(`/posts/${id}`,{ replace: false })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h2>Редактирование поста</h2>
            <form className="create-post" onSubmit={(evt) => submitPost(evt)}>
                <button className="close-btn" type="button" onClick={() => navigate(`/posts/${id}`,{ replace: false })}>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <label>Введите текст:</label>
                <textarea className="create-post-field" value={postValue} onChange={(evt) => setPostValue(evt.target.value)} />
                <button className="btn" type='submit'>Сохранить</button>
            </form>
        </>
    )
}

export default EditPost;