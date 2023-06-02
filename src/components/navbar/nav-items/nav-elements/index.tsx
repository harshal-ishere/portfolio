import { FC } from "react";
import "./styles.css"
interface incomingProps {
    name: string;
    href: string;
}
let Elements: FC<incomingProps> = (props) => {
    return (
        <a className="nav-elements" href={props.href}>
            <svg style={{ display: "inline" }} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <p className="elements-anchor">{props.name}</p>
        </a>
    )
}

export default Elements;