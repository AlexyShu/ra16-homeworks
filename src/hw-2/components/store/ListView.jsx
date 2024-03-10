import ShopItem from "./ShopItem.jsx";

function ListView({items}) {
    return (
        <div className="items">
            {items.map((item, index) => <ShopItem key={index} item={item}/>)}
        </div>
    )

}

export default ListView;