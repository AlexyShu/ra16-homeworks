import DateTimePretty from "./DateTimePretty.jsx";

function DateTime(props) {
    return (
        <p className="date">{props.date} / {props.dateValue}</p>
    )
}

export default DateTimePretty(DateTime);