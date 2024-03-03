function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

const months =
    [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ];

const weekDays = [
    {title: "Понедельник", value: "Пн"},
    {title: "Вторник", value: "Вт"},
    {title: "Среда", value: "Ср"},
    {title: "Четверг", value: "Чт"},
    {title: "Пятница", value: "Пт"},
    {title: "Суббота", value: "Сб"},
    {title: "Воскресенье", value: "Вс"},
];

const week = [1, 2, 3, 4, 5, 6, 7]

function Calendar({date}) {
    const day = date.getDate();
    const numberOfMonth = date.getMonth();
    const month = date.toLocaleString('ru', { month: 'long' });
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, numberOfMonth, 1) // 1 марта
    const lastDayOfMonth = new Date(year, numberOfMonth + 1, 0);
    const lastDayOfPreviousMonth = new Date(year, numberOfMonth, 0).getDate();

    let dayCounter = 2;
    let previousMonthDayCounter = lastDayOfPreviousMonth - (firstDayOfMonth.getDay() - 2);
    let nextMonthDayCounter = 1;

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">Среда</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{day}</div>
                    <div className="ui-datepicker-material-month">{months[date.getMonth()]}</div>
                    <div className="ui-datepicker-material-year">{year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{ucFirst(month)}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                        <col />
                            <col />
                                <col />
                                    <col />
                                        <col className="ui-datepicker-week-end" />
                                            <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        {weekDays.map(({title, value}) => {
                            return <th key={value} scope="col" title={title}>{value}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr id='firstWeek'>
                        {week.map((weekDay) => {
                            if(weekDay < firstDayOfMonth.getDay()) {
                                return <td key={`firstWeek ${weekDay}`}
                                           className="ui-datepicker-other-month">{previousMonthDayCounter++}</td>
                            }
                        })}
                        {week.map((weekDay) => {
                            if(weekDay === firstDayOfMonth.getDay())
                                return <td key={`firstWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>1</td>
                        })}
                        {week.map((weekDay) => {
                            if(weekDay > firstDayOfMonth.getDay()) {
                                return <td key={`firstWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>{dayCounter++}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        {week.map((weekDay) => {
                                return <td key={`secondWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>{dayCounter++}</td>
                            }
                        )}
                    </tr>
                    <tr>
                        {week.map((weekDay) => {
                                return <td key={`thirdWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>{dayCounter++}</td>
                            }
                        )}
                    </tr>
                    <tr>
                        {week.map((weekDay) => {
                                return <td key={`thirdWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>{dayCounter++}</td>
                            }
                        )}
                    </tr>
                    <tr>
                        {week.map((weekDay) => {
                            if(weekDay >= lastDayOfMonth.getDay())
                                return <td key={`thirdWeek ${weekDay}`} className={(day === dayCounter) && 'ui-datepicker-today'}>{dayCounter++}</td>
                            }
                        )}
                        {week.map((weekDay) => {
                            if(weekDay < lastDayOfMonth.getDay())
                                return <td key={`firstWeek ${weekDay}`} className="ui-datepicker-other-month">{nextMonthDayCounter++}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
)}

export default Calendar;