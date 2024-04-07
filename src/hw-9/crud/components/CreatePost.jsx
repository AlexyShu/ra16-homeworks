import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreatePost() {
    const [postValue, setPostValue] = useState('');
    const navigate = useNavigate();

    function submitPost(evt) {
        evt.preventDefault();
        axios.post('http://localhost:7070/posts', {
            id: crypto.randomUUID(),
            content: postValue
        })
            .then((response) => {
                navigate('/',{ replace: false })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h2>Создание поста</h2>
            <form className="create-post" onSubmit={(evt) => submitPost(evt)}>
                <button className="close-btn" type="button" onClick={() => navigate('/',{ replace: false })}>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <label>Введите текст:</label>
                <textarea className="create-post-field" value={postValue} onChange={(evt) => setPostValue(evt.target.value)} />
                <button className="btn" type='submit'>Опубликовать</button>
            </form>
        </>
    )
}

export default CreatePost;