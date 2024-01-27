// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
  }, 2000);
  }



  const changemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode is now Enabled", "Success");
      // document.title="TextTweak In Dark Mode"

      // setInterval(() => {
      //   document.title="Install This App"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install This Text-Based App"
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is now Enabled", "Success");
      // document.title="TextTweak In Light Mode"

    }
  }



  return (

    <>
      <Router>
        <Navbar title="MyFile" mode={mode} changemode={changemode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/about"
              element={<About />}>
            </Route>
            <Route exact path="/"
              element={<Form text="Enter Text Below To Analyze:-" showalert={showalert} mode={mode} />}>
            </Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;