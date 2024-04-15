import EditForm from "./components/EditForm.jsx";
import List from "./components/List.jsx";
import "./index.css";
import Search from "./components/Search.jsx";
import configureStore from "./redux/store.js";
import {Provider} from "react-redux";

function HW10App() {
    return (
        <Provider store={configureStore()}>
            <div className="wrap">
                <Search />
                <EditForm />
                <List />
            </div>
        </Provider>
    )
}

export default HW10App;