import React, { useState } from 'react'



export default function Form(props) {


    const [text, setText] = useState("");

    const handlechange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const ucClick = () => {
        // console.log("UC clicked ")
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "Success")
    }

    const lcClick = () => {
        // console.log("LC clicked ")
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", "Success")
    }


    const clearclick = () => {
        // console.log("cleartext clicked ")
        let newText = ' ';
        setText(newText);
        props.showalert("Text Is Cleared", "Success")
    }


    const TextCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text Copied to Clipboard!", "Success");
    }

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces removed!", "Success");
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='my-2'>{props.text}</h2>
                <div className="mb-3">
                    {/* <label for="Textarea" className="form-label">{props.text}</label> */}
                    <textarea className="form-control" value={text} onChange={handlechange} style={{ backgroundColor: props.mode === 'dark' ? 'purple' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="Textarea" rows="7"></textarea>
                </div>
            </div>


            {/* <button onClick={handleClick}>Convert To UC</button> */}
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={ucClick}>Convert To UC</button>

            {/* <button onClick={lcClick}>Convert To LC</button> */}
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={lcClick}>Convert To LC</button>

            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clearclick}>Clear Text</button>

            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={TextCopy}>Copy Text</button>

            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={RemoveExtraSpaces}>Remove Extra Text</button>



            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text length is displayed below:-</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>Time taken to read above text is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </p>

                <h4>Preview of Written Text:-</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
