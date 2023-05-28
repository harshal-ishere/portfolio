import {FC} from "react"
import Navbar from "./components/navbar/index";
import Body from "./components/body/index";
import "./index.css"

let App:FC=()=> {
  return ( 
      <div className="App">
        <div className="row mx-0">
          <div className="col-2 px-0" style={{height:'100vh'}}>
          <Navbar />
          </div>
          <div className="col-10 px-0" style={{height:'100vh'}}>
           <Body />
          </div>
        </div>
      </div>

  );
}

export default App;
