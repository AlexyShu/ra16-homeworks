function Typing({from, time}) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="typing-wrap">
                <div className="typing" />
                <div className="typing" />
                <div className="typing" />
            </div>
        </li>
    )
}
export default Typing;