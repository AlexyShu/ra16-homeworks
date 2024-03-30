import moment from "moment";
import {useEffect, useState} from "react";

function DateTimePretty(Component) {
    return (props) => {
        const [dateValue, setDateValue] = useState('');
        const today = new Date();
        const date = new Date(props.date);

        useEffect(() => {
            getDateValue();
        }, [dateValue])

        function getDateValue() {
            const diffHours = moment(date).diff(moment(today), 'hours');

            // 12 минут назад, если прошло меньше часа,
            if(diffHours === 0) {
                setDateValue('12 минут назад');
                return;
            }

            // 5 часов назад, если прошло больше часа,
            if(diffHours <= -1 && diffHours >= -24) {
                setDateValue('5 часов назад');
                return;
            }

            // X дней назад, если больше суток.
            if(diffHours < -24) {
                const diffDays = moment(today).diff(moment(date), 'days');
                setDateValue(`${diffDays} дней назад`);
                return;
            }

            setDateValue('некорректное значение');
        }

        return <Component {...props} dateValue={dateValue}/>;
    };
}

export default DateTimePretty;