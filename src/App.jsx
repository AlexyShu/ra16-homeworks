import ColorConverter from "./hw-4/components/color-converter/ColorConverter.jsx";
import Workout from "./hw-4/components/workout/Workout.jsx";

function App() {

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

export default App;
