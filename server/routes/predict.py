from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schema.prediction_schema import CarPredictionInput
from services.prediction import load_model, predictt
from pathlib import Path

app = FastAPI()

model = None
encoders = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173" or "https://car-price-prediction-webapp-pdmx.onrender.com"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.on_event("startup")
def startup_event():

    global model
    global encoders

    model, encoders = load_model(
        Path("artifacts")
    )
    print("Artifacts loaded successfully")

@app.post("/predict")
def predict_price(input_data: CarPredictionInput):
    features = input_data.dict()
    prediction = predictt(features, encoders, model)
    return {"predicted_price": prediction}

@app.get("/")
def predict_price():
    return {"message": "This is the predict endpoint"}
