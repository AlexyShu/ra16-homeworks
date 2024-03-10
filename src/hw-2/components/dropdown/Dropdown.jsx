function Dropdown({setShowList}) {
    return (
        <button type="button" data-id="toggle" className="btn" onClick={setShowList}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
        </button>
    )
}

export default Dropdown;