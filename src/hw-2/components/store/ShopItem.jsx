function ShopItem({item}) {
    return (
        <div className="item">
            <h3 className="cardName">{item.name}</h3>
            <p className="cardColor">{item.color}</p>
            <img alt={item.name} src={item.img} width={80} height={80} />
            <span>${item.price}</span>
            <button className="cardBtn" type="button">ADD TO CART</button>
        </div>
    )
}

export default ShopItem;