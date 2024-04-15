import {useState} from "react";
import {useDispatch} from "react-redux";
import addItemInList from "../redux/addItemInList.js";

const DEFAULT_FORM = {
    value: '',
    count: 0,
}

function EditForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState(DEFAULT_FORM)

    function changeField(evt) {
        evt.preventDefault();
        const { id, value } = evt.target;

        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    }

    function onSubmit(evt) {
        evt.preventDefault();
        dispatch(addItemInList(form));
    }

    function clearForm() {
        setForm(DEFAULT_FORM);
    }

    return (
        <form onSubmit={(evt) => onSubmit(evt)}>
            <input id="value" type="text" value={form.value} onChange={(evt) => changeField(evt)} />
            <input id="count" type="number" value={form.count} onChange={(evt) => changeField(evt)} />
            <button type='submit'>Save</button>
            <button type='button' onClick={() => clearForm()}>Cancel</button>
        </form>
    )
}

export default EditForm;