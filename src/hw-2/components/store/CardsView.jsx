import ShopCard from './ShopCard.jsx';

function CardsView({cards}) {
    return (
        <div className="cards">
            {cards.map((card, index) => <ShopCard key={index} card={card}/>)}
        </div>
    )
}

export default CardsView;