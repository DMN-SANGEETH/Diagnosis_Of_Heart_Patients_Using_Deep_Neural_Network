import { async } from "@firebase/util";
import { useState } from "react"
import "../styles/SignUp_Patients.css";

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
    <div className="demo">
      <div className="w3-panel1">
        {
          url &&
          <img src={url} className="demo1" />
        }
      </div>
      <div className="demo2">
        <input type="file" className="demo2_1" onChange={handler1}  />
        <div className="demo2_2">
        <button  onClick={handler2} type="submit">send</button>
        </div>
      </div>

      <div className="demo3">
        {predicted_class && <div>Predicted:{predicted_class}</div>}
        {confidence && <div>Confidence:{confidence}</div>}
      </div>
      </div>
  
  )
}