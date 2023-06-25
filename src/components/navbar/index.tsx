import { FC } from "react";
import "./styles.css"
import Header from "./nav-header/index"
import Items from "./nav-items/index"
import Bottom from "./nav-bottom/index"
let Navbar: FC = () => {
    
    return (
        <div className="primary p-2" style={{ height: '100%' }}>
            <Header />
            <Items />
            <Bottom />
        </div>
    )
}
export default Navbar;
