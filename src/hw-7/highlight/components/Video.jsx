function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} />
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default Video;