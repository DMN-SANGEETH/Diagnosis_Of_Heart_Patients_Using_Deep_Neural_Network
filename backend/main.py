from fastapi import FastAPI, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import cv2
from starlette.responses import FileResponse

from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#get to templare
templates = Jinja2Templates(directory="templates")

#set model
MODEL = tf.keras.models.load_model("Model.h5")

#predicted class
CLASS_NAMES = [ "Normal", "Paition"]

@app.get("/")
async def ping():
    return {
        "Diagnosis Of Heart Patients Using Deep Neural Network"
    }

@app.get("/ping")
async def ping():
    return FileResponse('./templates/index.html')

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)):
    img = await file.read()
    image = read_file_as_image(img)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (0,0), sigmaX=33, sigmaY=33)
    divide = cv2.divide(gray, blur, scale=255)
    thresh = cv2.threshold(divide, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)[1]
    width = int(thresh.shape[1]*68/100)
    height = int(thresh.shape[0]*51/100)
    dsize = (width, height)
    output = cv2.resize(thresh,dsize)
    #img=cv2.imread(output)
    cropped_image = output[150:760, 60:1460] # Slicing to crop the image
    test_img=cv2.resize(cropped_image,(224,224))
    test_img=test_img/255
    test_img=test_img.reshape(1,224,224,1)   


    predictions = MODEL.predict(test_img)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence1 = np.argmax(predictions[0])
    return {"predicted_class":predicted_class,"confidence":float(confidence1)}
    
if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
