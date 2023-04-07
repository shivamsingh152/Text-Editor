import React, { useState } from 'react'

export default function Textform(props) {
  const [text, settext] = useState("")

  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showalert("Converted to upper case","success")
  }
  const handleLwclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showalert("Converted to lower case","success")
  }
  const handleclear = () => {
    let newtext = "";
    settext(newtext)
    props.showalert("Text clear","success")
  }
  
  const handlecopy = () =>{
    navigator.clipboard.writeText(text)
    props.showalert("Text copied","success")
  }
  const handleextraspace = () =>{
    let newtext = text.split(/[ ]+/)
    settext(newtext.join(" "))
    props.showalert("Extra space removed","success")
  }

  const handleonchange = (event) => {
    settext(event.target.value)
  }   

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#81acc1':'white'}}
           onChange={handleonchange} id="mybox" rows="7"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLwclick}>To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>To Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>To Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>To remove space</button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Text summary..</h3>
        <h6><p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p></h6>
        <h6><p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p></h6>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:'No preview'}</p>
      </div>
    </>
  )
}
