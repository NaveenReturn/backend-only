import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from './Register';
import Details from './Details';
import Update from './Update';
import { Uploading } from './Uploading';
import { Test } from './Test';

function App() {
  return (
    <div className="App">
          
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Uploading/>} />
                  <Route path='/details'  element={<Details/>}/>
                  <Route path='/update/:id' element={<Update/>} />
              </Routes> 
          </BrowserRouter>
    </div>
  );
}

export default App;
