import { FC } from "react";
import "./styles.css";
import Heading from "./heading/index"
import MiddleItems from "./middle-items/index";
import BottomBar from "./bottom-bar";
let Body: FC = () => {
    return (
        <div className="secondary" style={{height:'100%'}}>
            <Heading />
            <MiddleItems />
            <BottomBar />
        </div>


    );
}
export default Body;