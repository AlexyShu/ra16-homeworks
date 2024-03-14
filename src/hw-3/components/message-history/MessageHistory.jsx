import React from "react";
import Message from "./Message.jsx";
import Response from "./Response.jsx";
import Typing from "./Typing.jsx";

function MessageHistory({list=[]}) {

    return (
        <>{list.length > 1 &&
            <ul>
                {list.map((item) => {
                    return <React.Fragment key={item.id}>
                        {item.type === 'message' && <Message from={item.from.name} message={item.text} time={item.time}/>}
                        {item.type === 'response' && <Response from={item.from.name} message={item.text} time={item.time} />}
                        {item.type === 'typing' && <Typing from={item.from.name} time={item.time} />}
                    </React.Fragment>
                })}
            </ul>}
        </>
    )
}

export default MessageHistory;