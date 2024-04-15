import AppReduxToolkit from "./hw-11/AppReduxToolkit.jsx";
import {Provider} from "react-redux";
import {store} from "./store";


function App() {

  return (
      <Provider store={store}>
        <AppReduxToolkit />
      </Provider>
  )
}

export default App;
