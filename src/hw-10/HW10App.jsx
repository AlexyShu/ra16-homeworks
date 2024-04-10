import EditForm from "./components/EditForm.jsx";
import List from "./components/List.jsx";
import "./index.css";
import Search from "./components/Search.jsx";

function HW10App() {
    return (
        <div className="wrap">
            <Search />
            <EditForm />
            <List />
        </div>
    )
}

export default HW10App;