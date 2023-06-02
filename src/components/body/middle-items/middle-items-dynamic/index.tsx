import { FC } from "react";
import "./styles.css"
interface incomingProps{
    data:string
}
let MiddleItemsDynamic: FC<incomingProps> = (props) => {
    return (
        <div className="middle-items-dynamic">
            <p>"{props.data}"➙</p>
        </div>
    )
}

export default MiddleItemsDynamic;