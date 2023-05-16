// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  let title = "Text Editor";

  //setting the colors of all the texts
  let [textColorDanger, setTextColorDanger] = useState("danger");
  let [textColorSuccess, setTextColorSuccess] = useState("success");
  let [textColorPrimary, setTextColorPrimary] = useState("primary");
  let [textColorDark, setTextColorDark] = useState("dark");
  let [textColorWarning, setTextColorWarning] = useState("warning");
  let [textColorWhite] = useState("white");
  let [textColorInfo, setTextColorInfo] = useState("info");

  //setting the color of all the backgrounds
  let [bgDark, setBgDark] = useState("dark");
  let [bgLight, setBgLight] = useState("light");
  let [bgWhite] = useState("white");
  let [bgRed] = useState("red");
  let [bgGreen] = useState("green");

  //making a dark mode function
  let [mode, setMode] = useState("light");
  let toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColorDark("light");
      setBgLight("dark");
      setBgDark("light");
      setTextColorSuccess("warning");
      document.body.style.backgroundColor = "black";
    }
    else {
      setMode("light");
      setTextColorDark("dark");
      setBgLight("light");
      setBgDark("dark");
      setTextColorSuccess("success");
      document.body.style.backgroundColor = "white";
    }
  }
  let toggleGreenMode = ()=>{
    if(mode!=="green"){
      setMode("green");
      setBgLight("success");
      setTextColorSuccess("dark");
      setTextColorInfo("dark");
      setTextColorWarning("success");
      setTextColorPrimary("dark");
      setTextColorDanger("success");
      setBgDark("success");
      document.body.style.backgroundColor = "white";
    }
    else{
      toggleDarkMode();
      // toggleDarkMode();
      setTextColorInfo("info");
      setTextColorWarning("warning");
      setTextColorPrimary("primary");
      setTextColorDanger("danger");
    }
  }

  return (
    <>
      <Navbar title={title}
        mode = {mode}
        toggleDarkMode={toggleDarkMode}
        toggleGreenMode = {toggleGreenMode}
        textColorDanger={textColorDanger}
        textColorDark={textColorDark}
        textColorInfo={textColorInfo}
        textColorPrimary={textColorPrimary}
        textColorSuccess={textColorSuccess}
        textColorWarning = {textColorWarning}
        textColorWhite={textColorWhite}
        bgDark={bgDark}
        bgGreen={bgGreen}
        bgLight={bgLight}
        bgRed={bgRed}
        bgWhite={bgWhite} />
      <div className='container'>
        <TextForm toggleDarkMode={toggleDarkMode}
          textColorDanger={textColorDanger}
          textColorDark={textColorDark}
          textColorInfo={textColorInfo}
          textColorPrimary={textColorPrimary}
          textColorSuccess={textColorSuccess}
          textColorWarning = {textColorWarning}
          textColorWhite={textColorWhite}
          bgDark={bgDark}
          bgGreen={bgGreen}
          bgLight={bgLight}
          bgRed={bgRed}
          bgWhite={bgWhite} />
      </div>

    </>
  );
}

export default App;
