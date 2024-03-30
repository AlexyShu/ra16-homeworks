import TimeApp from "./hw-7/time/TimeApp.jsx";
import HighlightApp from "./hw-7/highlight/HighlightApp.jsx";

function App() {

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

export default App;
