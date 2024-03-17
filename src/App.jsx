import ColorConverter from "./hw-4/components/color-converter/ColorConverter.jsx";
import Workout from "./hw-4/components/workout/Workout.jsx";
import PhotoManager from "./hw-4/components/photo-manager/PhotoManager.jsx";

function App() {

  return (
      <>
          {/*Конвертер цветов*/}
          <ColorConverter />
          <hr/>
          {/*Учёт тренировок*/}
          <Workout />
          <hr/>
          {/*Менеджер фото*/}
          <PhotoManager />
      </>
  )
}

export default App;
