import {useState} from "react";

function Workout() {
    const [isEdit, setEdit] = useState(false);
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({
        date: '',
        distance: '',
    })

    function onSubmit(evt) {
        evt.preventDefault();
        const sameDate = items.find((item) => item.date === form.date);

        if(sameDate) {
            const newArray = items.map((item, index) => {
                if (index === items.indexOf(sameDate)) {
                    return {date: sameDate.date, distance: isEdit ? form.distance : Number(items[index].distance) + Number(form.distance)};
                } else {
                    return item;
                }
            });

            setItems(newArray);
        } else {
            setItems((prevItems) => [...prevItems, form]);
        }

        setEdit(false);
    }

    function changeField(evt) {
        evt.preventDefault();
        const { id, value } = evt.target;

        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    }

    const remove = (date) => {
        setItems((prev) => prev.filter((b) => b.date !== date));
    };

    const edit = (date) => {
        setForm(items.find((item) => item.date === date));
        setEdit(true);
    }


    return (
        <div className="workout">
            <form className="workoutForm" onSubmit={(evt) => onSubmit(evt)}>
                <label className="workoutLabel">
                    <span>Дата(ДД.ММ.ГГ)</span>
                    <input type="date" id="date" className="workoutField" value={form.date} onChange={(evt) => changeField(evt)} />
                </label>
                <label className="workoutLabel">
                    <span>Пройдено км</span>
                    <input type="number" id="distance" className="workoutField" value={form.distance} onChange={(evt) => changeField(evt)} />
                </label>
                <button type="submit" className="workoutBtn">OK</button>
            </form>
            <table className="workoutTable">
                <thead>
                    <tr>
                        <th>Дата(ДД.ММ.ГГ)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length < 1 ?
                        <tr>
                            <td className="workoutItem">-</td>
                            <td className="workoutItem">-</td>
                            <td className="workoutItem">-</td>
                        </tr>
                        :
                        <>
                            {items.sort((a,b) => new Date(b.date) - new Date(a.date)).map((item, index) => {
                                return  (
                                    <tr key={index}>
                                        <td className="workoutItem">{item?.date}</td>
                                        <td className="workoutItem">{item?.distance}</td>
                                        <td className="workoutItem">
                                            <button onClick={() => edit(item.date)} type="button" className="workoutItemBtn">
                                                <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                </svg>
                                            </button>
                                            <button onClick={() => remove(item.date)} type="button" className="workoutItemBtn">
                                                <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Workout;