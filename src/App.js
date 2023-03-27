import './App.css';
import GetAll from "./views/GetAll";
import FetchByName from "./views/FetchByName";
import AddEmp from "./views/AddEmp";
import DeleteEmp from "./views/DeleteEmp";

function App() {

  return (
    <div className="App">

      <GetAll/>
     <FetchByName/><br/>
        <AddEmp/><br/>
        <DeleteEmp/>
    </div>
  );
}

export default App;
