import AppNavMenu from "./hw-9/nav-menu/AppNavMenu.jsx";
import AppCRUD from "./hw-9/crud/AppCRUD.jsx";

function App() {

  return (
      <>
          {/*Навигационное меню*/}
          <AppNavMenu />
          <hr/>
          {/*CRUD*/}
          <AppCRUD />
      </>
  )
}

export default App;
