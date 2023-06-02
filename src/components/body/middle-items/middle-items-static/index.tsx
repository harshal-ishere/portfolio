import { FC } from "react";
import "./styles.css"
interface incomingProps{
    data:string
}
let MiddleItemsStatic: FC<incomingProps> = (props) => {
    return (
        <div className="middle-items-static">
            <p>{props.data}</p>
        </div>
    )
}

export default MiddleItemsStatic;
