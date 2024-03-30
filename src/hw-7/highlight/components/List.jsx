import Video from "./Video.jsx";
import Article from "./Article.jsx";
import Popular from "./Popular.jsx";
import New from "./New.jsx";

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                if(item.views >= 1000) {
                    const PopularVideo = Popular(Video);
                    return <PopularVideo {...item} />
                }
                if(item.views <= 100) {
                    const NewVideo = New(Video);
                    return <NewVideo {...item} />
                }
                return (
                    <Video {...item} />
                )

            case 'article':
                if(item.views >= 1000) {
                    const PopularArticle = Popular(Article);
                    return <PopularArticle {...item} />
                }
                if(item.views <= 100) {
                    const NewArticle = New(Article);
                    return <NewArticle {...item} />
                }
                return (
                    <Article {...item} />
                )
        }
    });
}

export default List;