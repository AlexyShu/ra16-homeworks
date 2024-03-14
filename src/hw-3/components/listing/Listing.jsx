import "../../index.css";
import clsx from "clsx";

function Listing({items = []}) {

    function getPriceWithCurrency(currency_code, price) {
        switch (currency_code) {
            case 'USD':
                return `$${price}`;
            case 'EUR':
                return `€${price}`;
            default:
                return `${price} ${currency_code}`;
        }
    }

    function getQuantityClass(quantity) {
        if(quantity > 10 && quantity <= 20) {
            return 'level-medium';
        }
        if(quantity > 20) {
            return 'level-high';
        }
        return 'level-low';
    }

    return (
        <div className="item-list">
            {items.map((item) => {
                return (
                    <div key={item.listing_id} className="item">
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage?.url_570xN} alt={item.title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title?.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                            <p className="item-price">{getPriceWithCurrency(item.currency_code, item.price)}</p>
                            <p className={clsx('item-quantity', getQuantityClass(item.quantity))}>{item.quantity} left</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Listing;