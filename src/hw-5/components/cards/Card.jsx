function Card({children, picture }) {
    return (
        <div className="card">
            {picture && <img width={260} src={picture.url} alt={picture.name} />}
            <div className="cardContent">
                {children}
            </div>
        </div>
        );
}

export default Card;