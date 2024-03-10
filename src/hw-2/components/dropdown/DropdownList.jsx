import "../../dropdown.css";
import Dropdown from "./Dropdown.jsx";
import DropdownItem from "./DropdownItem.jsx";
import {useState} from "react";

const items  = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']

function DropdownList() {
    const [showList, setShowList] = useState(false);
    const [activeItem, setActiveItem] = useState(items[0]);

    return (
    <div className="dropdown-container">
        <div className="container">
            <div className="dropdown-wrapper open">
                <Dropdown setShowList={() => setShowList(!showList)} />
                {showList &&
                    <ul data-id="dropdown" className="dropdown">
                        {items.map((item) => {
                            return (
                                <DropdownItem
                                    key={item}
                                    item={item}
                                    activeItem={activeItem}
                                    setActiveItem={setActiveItem}
                                />
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    </div>
)}

export default DropdownList;