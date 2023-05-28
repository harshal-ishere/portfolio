import Navbar from "./components/navbar/index";
import Body from "./components/body/index";
function App() {
  return ( 
      <div className="App">
        <div className="row">
          <div className="col-2 pe-0">
          <Navbar />
          </div>
          <div className="col-10 ps-0">
           <Body />
          </div>
        </div>
      </div>

  );
}

export default App;
