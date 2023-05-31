import { FC } from "react";
import "./styles.css"
interface incomingProps{
    data:string
}
let MiddleItemsElements: FC<incomingProps> = (props) => {
    return (
        <div className="middle-items-elements">
            <p>{props.data}</p>
        </div>
    )
}

export default MiddleItemsElements;
