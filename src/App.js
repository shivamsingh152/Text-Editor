import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Footer from './component/Footer';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type)=>{
    setalert({
     message: message,
     type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1800);
  }
 
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
      // document.title = 'Text Utils - Dark Mode'

      // setInterval(() => {
      //   document.title = 'Text Utils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Text Utils'
      // }, 1700);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='';
      showalert("Light mode has been enabled","success");
      // document.title = 'Text Utils - Light Mode'
    }
  }
  
  return (
  <>
     {/* <Navbar/> */}
     {/* <Navbar title="Navbar" about="About" /> */}
     <Router>
    <Navbar title="Text Editor" mode={mode} togglemode={togglemode} />
    <div className="container my-3">
        <Alert alert={alert}/>
    <Routes>
          <Route path="/about" element={<About mode={mode} />}></Route>
          <Route path="/" element={<TextForm heading="Enter the text below.." 
          mode={mode} showalert={showalert}/>}></Route>
        </Routes>
    </div>
    <Footer/>
    </Router>
    </>

  );
}

export default App;
