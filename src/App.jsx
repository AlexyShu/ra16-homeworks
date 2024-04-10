import HW10App from "./hw-10/HW10App.jsx";
import {Provider} from "react-redux";
import configureStore from "./redux/store.js";

function App() {

  return (
      <Provider store={configureStore()}>
        <HW10App />
      </Provider>
  )
}

export default App;
