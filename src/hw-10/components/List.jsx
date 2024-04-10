import {useSelector} from "react-redux";

function List() {
    const {list}= useSelector((state) => state.reducer);

    return (
        <>
            {list.length < 1 ?
                <span>Список пуст</span> :
                <ul>
                    {list.map((item, index) => {
                    return (
                        <li key={index} className="listItem">
                            <span>{item.value} {item.count}</span>
                            <button type='button'>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={14} height={14}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button type='button'>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={14} height={14}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </li>
                    )})}
                </ul>
            }
        </>
    )
}

export default List;