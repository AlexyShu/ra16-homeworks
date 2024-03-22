function News({news}) {
    return <div className="news">
        <h3>News</h3>
        <ul>
            {news.map((item) => {
                return <li className="newsItem" key={item.id}>
                    <img width={20} src={item.icon} alt=""/>
                    <p className="newsText">{item.text}</p>
                </li>
            })}
        </ul>
    </div>
}

export default News;