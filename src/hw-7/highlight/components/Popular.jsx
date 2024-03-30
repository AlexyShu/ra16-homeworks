function Popular(Component) {
    return (props) => {
        return (
            <div className="wrap-item wrap-item-popular">
                <span className="label">Popular!</span>
                <Component {...props} />
            </div>
        )
    }
}

export default Popular;