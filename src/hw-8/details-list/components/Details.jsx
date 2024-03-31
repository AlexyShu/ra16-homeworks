function Details({info}) {

    return (
        <div className="details">
            <img src={info.avatar} align={info.name} />
            <h3>{info.name}</h3>
            <p>{info.details?.city}</p>
            <p>{info.details?.company}</p>
            <p>{info.details?.position}</p>
        </div>
    )
}

export default Details;