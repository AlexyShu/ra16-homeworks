function Navigation({menuItems}) {
    return (
        <div className="navigation">
            <h3>Navigation</h3>
            <ul className="menuItems">
                {menuItems.map((item) => {
                    return <li key={item.name}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Navigation;