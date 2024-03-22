import ColorConverter from "./components/color-converter/ColorConverter.jsx";
import Workout from "./components/workout/Workout.jsx";

function HW4() {
    return (
        <>
            {/*Конвертер цветов*/}
            <ColorConverter />
            <hr/>
            {/*Учёт тренировок*/}
            <Workout />
        </>
    )
}

export default HW4;