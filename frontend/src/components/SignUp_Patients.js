import { async } from "@firebase/util";
import { useState } from "react"
// import { storage } from "./db";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function App() {

  const [url, setURL] = useState('')
  const [img,setImg] = useState('')
  const [predicted_class,set_predicted_class] = useState(null)
  const [confidence,set_confidence] = useState(null)

  const handler1 = (event) => {
    const file = event.target.files[0];
    setImg(file)
    const reader = new FileReader()
    const url = URL.createObjectURL(file);
    setURL(url);
  }

  const handler2 = async(event) => {
    // const headers = {'Content-Type':'application/json',
    //                 'Access-Control-Allow-Origin':'*',
    //                 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
    // }
    const formData = new FormData()
    formData.append('file',img)
    const res  = await fetch('http://127.0.0.1:8000/predict',{
    method:'POST',
    // headers:headers,
    body:formData
    })
    const {predicted_class,confidence} = await res.json()
    //to view consol
    console.log(predicted_class,confidence);
    set_predicted_class(predicted_class)
    set_confidence(confidence)
  }


  return (
    <>
      <div className="w3-panel">
        {
          url &&
          <img src={url} className="w3-image" />
        }
      </div>
      <div className="w3-panel">
        <input type="file" onChange={handler1} className="w3-input" />
        <button className="w3-button" onClick={handler2} type="submit">send</button>
      </div>

      <div className="w3-panel">
        {predicted_class && <div>Predicted:{predicted_class}</div>}
        {confidence && <div>Confidence:{confidence}</div>}
      </div>

    </>
  )
}