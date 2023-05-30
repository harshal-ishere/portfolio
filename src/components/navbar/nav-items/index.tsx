import {FC} from "react";
import "./styles.css";
import Elements from "./nav-elements/index";
interface sidebarData{
    id:number;name:string,link:string;
}
let dataElements:sidebarData[]=[
    {id:1,name:"Home",link:"#"},{id:2,name:"Skills",link:"#"},
    {id:3,name:"Projects",link:"#"},{id:4,name:"Blogs",link:"#"},
    {id:5,name:"About",link:"#"},{id:6,name:"Contact",link:"#"},
]

let Items:FC=()=>{
    return(
        <> 
        <p className="semiHeading">Today's</p>
        {dataElements.map((data)=>
            <Elements key={data.id} name={data.name} href={data.link} />
        )}
        </>
    )
}
export default Items;