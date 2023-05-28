import {FC} from "react";
import "./styles.css"
import Header from "./nav-header/index"
let Navbar:FC=()=>{
    return(
        <div className="primary p-2" style={{height:'100%'}}> 
           <Header />
        </div>
    )
}
export default Navbar;