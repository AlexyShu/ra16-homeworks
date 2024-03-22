function Weather({weather}) {
    return <div className="weather">
        <h2>Weather</h2>
        <div className="weatherWrap">
            <img width={40} height={40} src={weather.icon} alt=""/>
            <span>{weather.now}</span>
        </div>

    </div>
}
export default Weather;