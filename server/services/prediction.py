import joblib
from pathlib import Path


def load_model(artifacts_path):

    model = joblib.load(
        artifacts_path / "RandomForestRegressor_Model.pkl"
    )

    encoders = joblib.load(
        artifacts_path / "encoders.pkl"
    )

    return model, encoders

def predictt(features,encoders, model):

    carname = encoders['CarName'].transform(
        [features['CarName']]
    )[0]

    fueltype = encoders['fueltype'].transform(
        [features['fueltype']]
    )[0]

    cylindernumber = encoders['cylindernumber'].transform(
        [features['cylindernumber']]
    )[0]

    doornumber = encoders['doornumber'].transform(
        [features['doornumber']]
    )[0]

    carbody = encoders['carbody'].transform(
        [features['carbody']]
    )[0]

    drivewheel = encoders['drivewheel'].transform(
        [features['drivewheel']]
    )[0]

    enginetype = encoders['enginetype'].transform(
        [features['enginetype']]
    )[0]

    fuelsystem = encoders['fuelsystem'].transform(
        [features['fuelsystem']]
    )[0]

# price,enginesize,curbweight,horsepower,carwidth,carlength,CarName,fueltype,cylindernumber,doornumber,carbody,drivewheel,enginetype,fuelsystem


    input_features = [
        features['enginesize'],
        features['curbweight'],
        features['horsepower'],
        features['carwidth'],
        features['carlength'],
        carname,
        fueltype,
        cylindernumber,
        doornumber,
        carbody,
        drivewheel,
        enginetype,
        fuelsystem
    ]

    input_features = [input_features]
    prediction = model.predict(input_features)
    return prediction[0]
        