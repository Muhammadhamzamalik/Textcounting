import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const[mode , setMode]= useState("light")
  const [alert, setalert] = useState(null)

  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#508fd9"
      showAlert("Dark mode is enable", "Successfully")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enable", "Successfully")
    }
  }
  return (
    <>
      <Navbar title="textUtils"About="About Us" Search="Search" home="Home" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
      <div className="container">
      <Alert alert={alert}/>
      </div>
      <TextForm showAlert={showAlert}/>
      {/* <Cherectorcounter/>  */}

    </>
  );
}
export default App;