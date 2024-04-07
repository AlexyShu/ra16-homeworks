import {useEffect, useState} from "react";
import axios from "axios";
import cat from "../../../img/cat.jpg";
import {Link} from "react-router-dom";
import Post from "./Post.jsx";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(' http://localhost:7070/posts')
            .then((data) => {
                setPosts(data.data);
            })
    }, [])

    return (
        <div>
            {posts.length < 1 ?
                <span className="empty">Постов пока нет</span> :
                <div className="posts">
                    <Link to="/posts/new" className="btn">Создать пост</Link>
                    {posts?.map((post) => {
                        return (
                            <Link to={`/posts/${post.id}`} key={post.id}>
                                <Post post={post} />
                            </Link>)
                    })}
                </div>
            }
        </div>
    );
}

export default Posts;