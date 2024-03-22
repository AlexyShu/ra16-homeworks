import Card from "./Card.jsx";
import picture from "../../../img/cat.jpg";
import "../../index.css";

const cards = [
    {
        id: 1,
        title: 'Card title width picture',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
        link: 'https://test.ru',
        picture: {
            name: 'picture',
            url: picture,
        }
    },
    {
        id: 2,
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
        link: 'https://test.ru',
        picture: null,
    }
]

function Cards()  {
    return (
        <div className="cards">
            {cards.map((card) => {
                return (
                    <Card key={card.id} picture={card.picture}>
                        <h5 className="cardTitle">{card.title}</h5>
                        <p className="cardText">{card.text}</p>
                        <a href={card.link} className="cardBtn">Go somewhere</a>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards;