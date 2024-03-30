import DateTime from "./DateTime.jsx";

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url}></iframe>
            <DateTime date={props.date} />
        </div>
    )
}
export default Video;