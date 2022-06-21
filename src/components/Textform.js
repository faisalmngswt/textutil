
import React, { useState } from 'react';



  // Declare a new state variable, which we'll call "count"
  
export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("Uppercase was  change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter your text");
    // text="alkdjasifj" wrong way to change value of text
    // setText="alkdjasifj" correct way to change value of text

  return (
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
      </div>
  )
}
