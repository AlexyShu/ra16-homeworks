function New(Component) {
    return (props) => {
        return (
            <div className="wrap-item wrap-item-new">
                <span className="label">New!</span>
                <Component {...props} />
            </div>
        )
    }
}

export default New;