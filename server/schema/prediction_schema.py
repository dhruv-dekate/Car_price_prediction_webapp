from pydantic import BaseModel

class CarPredictionInput(BaseModel):
    CarName: str
    fueltype: str
    cylindernumber: str
    doornumber: str
    carbody: str
    drivewheel: str
    enginetype: str
    fuelsystem: str

    enginesize: float
    curbweight: float
    horsepower: float
    carwidth: float
    carlength: float

    