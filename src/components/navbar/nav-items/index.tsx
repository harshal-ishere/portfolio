import {FC} from "react";
import "./styles.css";
import Elements from "./nav-elements/index";
let Items:FC=()=>{
    return(
        <> 
        <p className="semiHeading">Today's</p>
        <Elements name="Home" href="#"  />
        <Elements name="Skills" href="#"  />
        <Elements name="Projects" href="#"  />
        <Elements name="About" href="#"  />
        <Elements name="Contact" href="#"  />
        </>
    )
}
export default Items;