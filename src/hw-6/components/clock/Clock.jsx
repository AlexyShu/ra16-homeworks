import "../../index.css";
import {useEffect, useState} from "react";
import moment from "moment-timezone";
import ClockWidget from "./ClockWidget.jsx";

const timezones = moment.tz.names();

function Clock() {
    const [clocks, setClocks] = useState([]);

    const [form, setForm] = useState({
        timezone: timezones[0],
        city: timezones[0].split('/')[1],
        time: moment().tz(timezones[0]).format('HH:mm:ss'),
        hours: moment().tz(timezones[0]).format('HH'),
        minutes: moment().tz(timezones[0]).format('mm'),
        seconds: moment().tz(timezones[0]).format('ss'),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if(clocks.length > 0) {
                const newArray = clocks.map((clock) => {
                    clock.time = moment().tz(clock.timezone).format('HH:mm:ss');
                    clock.hours = moment().tz(clock.timezone).format('HH');
                    clock.minutes = moment().tz(clock.timezone).format('mm');
                    clock.seconds = moment().tz(clock.timezone).format('ss');
                    return clock;
                });
                setClocks(newArray);
            }
        }, 1000)

         return () => clearInterval(timer)
        },[clocks]);


    function addClock(evt) {
        evt.preventDefault();
        const sameCity = clocks.find((item) => item.city === form.city);
        const value = moment().tz(form.timezone).format('HH:mm:ss');

        setForm( {...form, time: value })

        if(!sameCity) {
            setClocks((prevClocks) => [...prevClocks, form]);
        }
    }

    function changeField(evt) {
        evt.preventDefault();
        const { value } = evt.target;

        setForm((prevForm) => ({
            ...prevForm,
            timezone: value,
            city: value.split('/')[1],
        }));
    }

    const remove = (city) => {
        setClocks((prev) => prev.filter((clock) => clock.city !== city));
    };

    return (
        <div>
            <form className="clockForm" onSubmit={(evt) => addClock(evt)}>
                <label className="clockLabel">
                    <span>Название</span>
                    <input readOnly={true} value={form.city}/>
                </label>
                <label className="clockLabel">
                    <span>Временная зона</span>
                    <select
                        id="timezone"
                        onChange={(evt) => changeField(evt)}
                        value={form.timezone}
                    >
                        {timezones.map((zone) => {
                            return <option key={zone}>{zone}</option>
                        })}
                    </select>
                </label>
                <button type="submit">Добавить</button>
            </form>
            <div className="clocks">
                {clocks.map((clock) => {
                    return <div key={clock.city} className="clockWrapper">
                        <div className="clockHeader">
                            <h5 className="cityTitle">{clock.city}</h5>
                            <button className="remove" type="button" onClick={()=>remove(clock.city)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={14} height={14}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <span className="time">{clock.time}</span>
                        <ClockWidget hours={clock.hours} minutes={clock.minutes} seconds={clock.seconds} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default Clock;