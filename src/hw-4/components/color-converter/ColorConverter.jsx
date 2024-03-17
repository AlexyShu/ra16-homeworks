import "../../index.css";
import {useState} from "react";

const DEFAULT_COLOR = {
    hex: '#3eb4b4',
    rgb: 'rgb(62, 180, 180)',
    background: '#3eb4b4',
}

function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [ parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16) ]
        : null;
}

function ColorConverter() {
    const [color, setColor] = useState(DEFAULT_COLOR);

    function changeColor(evt) {
        evt.preventDefault();
        const { value } = evt.target;

        setColor((prevColor) => ({
            ...prevColor,
            ["hex"]: value
        }))

        if(value.length === 7) {
            if(value.match(/#[a-f0-9]{6}\b/)) {
                setColor((prevColor) => ({
                    ...prevColor,
                    ["rgb"]: hexToRgb(value),
                    ["background"]: prevColor.hex,
                }))
            } else {
                setColor((prevColor) => ({
                    ...prevColor,
                    ["rgb"]: 'Ошибка!',
                    ["background"]: '#FF0000',
                }))
            }
        }
    }

    return (
        <div className="converterWrap" style={{background: color.background}}>
            <input className="field" type="text" value={color.hex} onChange={(evt) => changeColor(evt)}/>
            <input className="field" type="text" value={color.rgb} readOnly={true}/>
        </div>
    )

}

export default ColorConverter;