import {FC,useContext} from "react";
import "./styles.css";
import { AppContext } from "../../../App";
let Header:FC=()=>{
    let appContext = useContext(AppContext);

  if (!appContext) {
    // Handle the case when appContext is null
    return null;
  }
  let { setToggle, toggle } = appContext;
    return(
        <>
        <a href="#" className="navbar-heading"><span className="headers-initial">+</span><span className="ms-2">harshal.ishere</span></a>
        <div onClick={() => setToggle(toggle === null ? true : !toggle)} className="chat-gpt-sidebar-toggle" style={{position:"initial"}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 chat-gpt-sidebar-toggle-img" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
        </>
    )
}

export default Header;