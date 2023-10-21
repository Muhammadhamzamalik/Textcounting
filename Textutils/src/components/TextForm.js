import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("Enter Something");

  function converter() {
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to upperCase", "Successfully")
    document.title="textUtils: Uppercase"

  }
  const  loverconverter=()=> {
    let newText1 = text.toLowerCase();
    settext(newText1);
    props.showAlert("Converted to lowerCase", "Successfully")
    document.title="textUtils: lowerCase"

  }
  const Clear = () => {
    settext("");
    props.showAlert("Deleted the content", "Successfully")
    document.title="textUtils: Deleted"

  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking u can listn", "Successfully")
    document.title="textUtils: speaking"

  };
  const copy = () => {
    let tex = document.getElementById("myBox");
    tex.select();
    navigator.clipboard.writeText(tex.value);
    props.showAlert("Text has been copy", "Successfully")
    document.title="textUtils: Copy"

  };

  function handler(event) {
    settext(event.target.value);
  }
  return (
    <>
      <div className="container mb-3" >
        {/* <label htmlFor="myBox" className="form-label"> */}
        <h1>Converter</h1>
        <h1> {props.heading}</h1>

        {/* </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows={9}
          onChange={handler}
            // placeholder={text}
          value={text}
        />
        <button disabled={text.length===0} className="btn btn-primary" onClick={converter}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={loverconverter}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={Clear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copy}>
          Copy
        </button>
        <p>
          {text.split(" ").filter((even)=>{return even.length !==0}).length} Worde and {text.length} cheretor
        </p>
        <p>
          {0.08 * text.split(" ").filter((even)=>{return even.length !==0}).length} min time requirde for reading this
          paragraph
        </p>
        <h3>Preview means how much is paragraph</h3>
        <p>{text.length > 0 ? text : "Enter some text for preview"}</p>
      </div>
     
    </>
  );
}
