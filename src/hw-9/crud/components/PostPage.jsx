import {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post.jsx";
import {Link, useNavigate} from "react-router-dom";

function PostPage() {
    const [post, setPost] = useState({id: 0, created: '', content: ''});
    const navigate = useNavigate();
    const id = window.location.pathname[window.location.pathname.length - 1];

    useEffect(() => {
        axios.get(` http://localhost:7070/posts/${id}`)
            .then((data) => {
                setPost(data.data.post);
            })
    }, []);

    function deletePost() {
        axios.delete(` http://localhost:7070/posts/${id}`)
            .then((data) => {
                navigate('/',{ replace: false });
            })
    }

    return (
        <>
            {post.id === 0 ?
                <span className="empty">Loading...</span>:
                <>
                    <Post post={post} />
                    <div className="btns">
                        <Link to={`/posts/edit/${id}`} className="btn" type="button">Изменить</Link>
                        <button className="btn" type="button" onClick={()=> {deletePost()}}>Удалить</button>
                    </div>
                </>
            }
        </>)
}

export default PostPage;