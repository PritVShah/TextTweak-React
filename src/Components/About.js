import React, { useState } from 'react'

export default function About() {

    // let myStyle={
    //     color:"white",
    //     backgroundColor:"black"
    // }

    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [button, setbutton] = useState("Dark Mode On")

    const ChangeMode = () => {
        if (myStyle.color === 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                // border:'1px solid white'
            })
            setbutton('Light Mode On');
        }
        else {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbutton('Dark Mode On');
        }

    }


    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Accordian</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Texttweak gives you a way to analyze your text quickly and efficiently.It will do word count,Character count also.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            TextTweak is a free character counter tool that provides instant character count and word count stats for a given text.It would reports the number of words and characters,So it is suitable for writing text with word or characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This app would work on any browser such as Chrome,Firefox,Internet Explorer,Opera,Safari so we says that it is browser compatible as it works on all browsers.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button type="button" onClick={ChangeMode} className="btn btn-primary my-3">{button}</button>
            </div>

        </div>
    )
}
