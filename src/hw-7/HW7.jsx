import TimeApp from "./time/TimeApp.jsx";
import HighlightApp from "./highlight/HighlightApp.jsx";

function HW7() {
    return (
        <>
            {/*Форматирование даты публикации*/}
            <h3>Форматирование даты публикации</h3>
            <TimeApp />
            <hr />
            {/*Подсвечивание блоков*/}
            <h3>Подсвечивание блоков</h3>
            <HighlightApp />
        </>
    )
}

export default HW7;