import "../../index.css";
import cat from "../../../img/cat.jpg";
import cloud from "../../../img/cloud.jpg";
import News from "./News.jsx";
import Navigation from "./Navigation.jsx";
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Promotion from "./Promotion.jsx";
import Weather from "./Weather.jsx";
import Visited from "./Visited.jsx";
import TVProgram from "./TVProgram.jsx";
import Live from "./Live.jsx";

const news = [
    {
        id: 1,
        icon: cat,
        text: 'bla-bla'
    },
    {
        id: 2,
        icon: cat,
        text: 'bla-bla'
    },
    {
        id: 3,
        icon: cat,
        text: 'bla-bla'
    }
]

const menuItems = [
    {name:'Видео', link: '#'},
    {name:'Картинки', link: '#'},
    {name:'Новости', link: '#'},
    {name:'Карты', link: '#'},
    {name:'Маркет', link: '#'},
    {name:'Переводчик', link: '#'},
    {name:'Эфир', link: '#'},
]

const weather = {
    icon: cloud,
    now: '+17',
}

function Yandex() {
    return (
        <div className="yandex">
            <News news={news} />
            <Navigation menuItems={menuItems} />
            <div className="wrap">
                <Logo />
                <Search />
            </div>
            <Promotion />
            <div className="wrapper">
                <div className="columnWrap">
                    <Weather weather={weather} />
                    <Visited />
                </div>
                <TVProgram />
                <Live />
            </div>
        </div>
    )
}

export default Yandex;