import React, {useState} from 'react'
import './TextForm.module.css';

export default function TextForm(props) {
    let [text, setText] = useState("Enter text Here...");
    let handleOnChange = (event)=>{
        setText(event.target.value);
    }
    let toUppercase = ()=>{
        setText(text.toUpperCase());
    }
    let toLowercase = ()=>{
        setText(text.toLowerCase());
    }
    let copyToClipboard = ()=>{
        let myText = document.getElementById("myText");
        myText.select();
        navigator.clipboard.writeText(myText.value);
    }
    
    function numWords(arr){
        let length = 0;
        arr.forEach(element => {
            if(element!==""){
                length++;
            }
        });
        return length;
    }
    let size = text.split(" ");
    let len = numWords(size);
    let trimSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        // let size = text.split(" ");
        // let k = 0;
        // let size2;
        // for(let i = 0; i<size.length; i++){
        //     if(size[i]!==""){
        //         size2[k] = size[i];
        //         k++;
        //     }
        // }
        // text = size2.toString();
        // text = text.replace(","," ");
        setText(newtext.join(" "));   
    }
    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"><h1 className={`text-${props.textColorSuccess} my-3`}>Welcome to Text Utils</h1></label>
                <textarea className={`form-control text-${props.textColorDark} bg-${props.bgLight}`} id="myText" rows="10" onChange = {handleOnChange} value={text}></textarea>
            </div>
            <button type="button" className={`btn btn-${props.textColorDanger} my-3 mx-3`} onClick={toUppercase}>Text to Uppercase</button>
            <button type="button" className={`btn btn-${props.textColorDanger} my-3 mx-3`} onClick={toLowercase}>Text to Lowercase</button>
            <button type="button" className={`btn btn-${props.textColorDanger} my-3 mx-3`} onClick={copyToClipboard}>Copy to Clipboard</button>
            <button type="button" className={`btn btn-${props.textColorDanger} my-3 mx-3`} onClick={trimSpaces}>Trim</button>
            <h2 className={`text-${props.textColorWarning} my-3`}>Summary</h2>
            <h4 className={`text-${props.textColorDark}`}>No. of Words : {len}</h4>
            <h4 className={`text-${props.textColorDark}`}>No. of Characters : {text.length}</h4>
            <h2 className={`text-${props.textColorWarning} my-3`}>Text Preview</h2>
            <span className={`text-${props.textColorPrimary} my-3 mx-3`}>{text}</span>
        </>
    )
}
