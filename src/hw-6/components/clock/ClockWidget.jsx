const deg = 6;

function ClockWidget({hours, minutes, seconds}) {
    const hh = hours * 30;
    const mm = minutes * deg;
    const ss = seconds * deg;

    return (
        <div className="clock">
            <div className="hour">
                <div className="hr" id="hr" style={{transform:`rotateZ(${(hh) + (mm/12)}deg)`}} />
            </div>
            <div className="min">
                <div className="mn" id="mn" style={{transform: `rotateZ(${mm}deg)`}}/>
            </div>
            <div className="sec">
                <div className="sc" id="sc" style={{transform: `rotateZ(${ss}deg)`}} />
            </div>
        </div>
    )
}

export default ClockWidget;