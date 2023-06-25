import { FC, useContext ,useRef} from "react";
import { AppContext } from "../../../App"
import "./styles.css"
let Heading: FC = () => {
  let appContext = useContext(AppContext);
let myRef=useRef<any>();
let marRef=useRef<any>();
  if (!appContext) {
    // Handle the case when appContext is null
    return null;
  }
  let { setToggle, toggle } = appContext;
  if(toggle===false){
  myRef.current.classList.add("invincible");
 
  }
  if(toggle===true){
    myRef.current.classList.remove("invincible");
    
  }
  return (
    <>
      <div onClick={() => setToggle(toggle === null ? true : !toggle)} className="chat-gpt-sidebar-toggle invincible" ref={myRef}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 chat-gpt-sidebar-toggle-img" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
      <h1 className="body-header">PortFOLIO</h1>
    </>
  )
}
export default Heading;