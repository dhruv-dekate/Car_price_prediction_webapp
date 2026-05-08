from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
from pathlib import Path
import pandas as pd
import numpy as np
import joblib

# Cleaned Dataset Path

Cleaned_Dataset_Path = Path("Backend/data/Cleaned_df.csv")

# Load the cleaned dataset
df = pd.read_csv(Cleaned_Dataset_Path)
print(df.head())
print(df.columns)

# Separate features and target variable
features = df.drop("price", axis=1)
target = df["price"]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.3, random_state=42)

# Initialize the Random Forest Regressor
RandomForestRegressor_Model = RandomForestRegressor(n_estimators=100, random_state=42)

# Fit the model to the training data
RandomForestRegressor_Model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = RandomForestRegressor_Model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse}")
print(f"R^2 Score: {r2}")

model_path = Path("Backend/artifacts/RandomForestRegressor_Model.pkl")

# Save the model to a file
joblib.dump(RandomForestRegressor_Model, model_path)
print(f"Model saved to {model_path}")
