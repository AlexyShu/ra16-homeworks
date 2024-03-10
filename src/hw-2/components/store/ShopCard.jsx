function ShopCard({card}) {
    return (
        <div className="card">
            <h3 className="cardName">{card.name}</h3>
            <p className="cardColor">{card.color}</p>
            <img alt={card.name} src={card.img} width={200} height={200} />
            <div className="cardPriceWrap">
                <span>${card.price}</span>
                <button className="cardBtn" type="button">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;