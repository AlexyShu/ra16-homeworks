function DropdownItem({item, activeItem, setActiveItem}) {
    return (
        <li className={activeItem === item && 'active'}>
            <a onClick={() => setActiveItem(item)} href="#">{item}</a>
        </li>
    )
}

export default DropdownItem;