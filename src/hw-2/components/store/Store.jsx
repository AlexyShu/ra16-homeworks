import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardsView.jsx";
import {useState} from "react";
import ListView from "./ListView.jsx";

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function Store() {
    const [state, setState] = useState('view_list');

    function handlerClick() {
        if(state === 'view_list') {
            setState('view_module');
        } else {
            setState('view_list');
        }
    }

    return (
        <div className="store">
            <IconSwitch icon={state} onSwitch={handlerClick}/>
           {state === 'view_list' ?
               <CardsView cards={products} /> :
                <ListView items={products} />
           }
        </div>
    )
}

export default Store;