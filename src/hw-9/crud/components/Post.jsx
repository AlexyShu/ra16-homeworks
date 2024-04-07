import cat from "../../../img/cat.jpg";

function Post({post}) {

    return  (
        <div className="post" >
            <div className="user-block">
                <img className="avatar" width={40} height={40} src={cat} alt="avatar" />
                <div className="user-block-wrap">
                    <span>Автор: Вася Пупкин</span>
                    <span>Создано: {new Date(post.created).toLocaleString()}</span>
                </div>
            </div>
            <p>{post.content}</p>
        </div>
    )
}
export default Post;