import { FC } from "react";
import "./styles.css";

let Bottom: FC = () => {
    return (
        <div className="bottom-content">
            <hr className="my-2 nav-bot-hr" />
            <a href="" className="nav-bottom">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 vert-nav-img" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <p className="bottom-txt">Hire me</p>
            </a>
            <a href="" className="nav-bottom">
                <p className="vert-nav-img">@</p>
                <p className="bottom-txt">11.sync.er@gmail.com</p>
            </a>

        </div>
    )
}
export default Bottom;