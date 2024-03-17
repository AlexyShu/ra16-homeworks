import Star from "./Star.jsx";
import "../../chat.css";

function Stars({count}) {

    function getArr() {
        const arr = [];
        for(let i = 0; i < count; i++) {
            arr.push(i);
        }
        return arr;
    }

    return (
        <>
            {typeof count === "number" && count >= 1 && count <= 5 &&
                <ul className="card-body-stars u-clearfix">
                    {getArr().map((el) => {
                        return (
                            <li key={el}>
                               <Star />
                            </li>
                        )})
                    }
                </ul>
            }
        </>
    )
}

export default Stars;