function Response({from, message, time }) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">
                {message}
            </div>
        </li>
    )
}

export default Response;