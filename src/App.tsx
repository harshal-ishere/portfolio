import { FC,createContext,useRef,useState} from "react"
import Navbar from "./components/navbar/index";
import Body from "./components/body/index";
import "./index.css"
interface outState{
  toggle:any;
  setToggle:React.Dispatch<React.SetStateAction<any>>;
}
export let AppContext=createContext<outState | null>(null);

let App: FC = () => {
  let [toggle,setToggle]=useState<outState | null | boolean>(null);
  let navRef=useRef<any>();
  let bodyRef=useRef<any>();
  if(toggle===true){
    navRef.current.classList.replace("col-2","invincible");
    bodyRef.current.classList.replace("col-10","col-12");
  }
  if(toggle===false){
  navRef.current.classList.replace("invincible","col-2");
  bodyRef.current.classList.replace("col-12","col-10");
  }
    let [width, setWidth] = useState<any>();
    // let [sidebarVis, setSidebarVis] = useState(true);
    let sidebarVis=useRef(true);
    
     window.addEventListener('resize', () => setWidth(window.innerWidth));
    //     if(width<=770){
    //       navRef.current.classList.replace("col-2","invincible");
    //       bodyRef.current.classList.replace("col-10","col-12");
    
    //     }
    //     if(width>770){
    //       if(navRef.current.className==="invincible px-0" && bodyRef.current.className==="col-12 px-0"){
    //         navRef.current.classList.replace("invincible","col-2");
    //         bodyRef.current.classList.replace("col-12","col-10");
    //         console.log("yess");
    //       }
    //     }
    if(width<=770){
      sidebarVis.current=false;
        }
    if(width>770){
      sidebarVis.current=true;
    }
    console.log(sidebarVis.current)
  return (
    <div className="App">
      <div className="row mx-0">
        <AppContext.Provider value={{toggle,setToggle}}>
        <div className="col-2 px-0" ref={navRef}><Navbar/></div>
        <div className="col-10 px-0"ref={bodyRef}><Body /></div>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
