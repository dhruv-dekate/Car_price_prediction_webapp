import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    CarName: "",
    carbody: "",
    drivewheel: "",
    fueltype: "",
    doornumber: "",
    cylindernumber: "",
    fuelsystem: "",
    enginetype: "",
    enginesize: 0,
    curbweight: 0,
    horsepower: 0,
    carwidth: 0,
    carlength: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "enginesize",
      "curbweight",
      "horsepower",
      "carwidth",
      "carlength",
    ];

    setData({
      ...data,
      [name]: numericFields.includes(name) ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);

      const response = await axios.post("http://localhost:8000/predict", data);
      const result = response.data.predicted_price;
      setPrediction(result);
      console.log(result);

      setData({
        CarName: "",
        carbody: "",
        drivewheel: "",
        fueltype: "",
        doornumber: "",
        cylindernumber: "",
        fuelsystem: "",
        enginetype: "",
        enginesize: 0,
        curbweight: 0,
        horsepower: 0,
        carwidth: 0,
        carlength: 0,
      });
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-500 via-purple-950 to-gray-900">
        Car Price Prediction
      </h1>
      <div className="p-2 shadow-2xl shadow-gray-500 rounded-2xl mt-3">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 p-6 rounded-lg shadow-md "
        >
          <div className=" flex flex-col gap-4 ">
            <div>
              <label htmlFor="CarName">Select Car Name:</label>
              <input
                id="CarName"
                name="CarName"
                type="text"
                list="carnames-list"
                placeholder="Type to search car name..."
                value={data.CarName}
                onChange={handleChange}
              />
              <datalist id="carnames-list">
                <option value="Nissan versa" />
                <option value="alfa-romero Quadrifoglio" />
                <option value="alfa-romero giulia" />
                <option value="alfa-romero stelvio" />
                <option value="audi 100 ls" />
                <option value="audi 100ls" />
                <option value="audi 4000" />
                <option value="audi 5000" />
                <option value="audi 5000s (diesel)" />
                <option value="audi fox" />
                <option value="bmw 320i" />
                <option value="bmw x1" />
                <option value="bmw x3" />
                <option value="bmw x4" />
                <option value="bmw x5" />
                <option value="bmw z4" />
                <option value="buick century" />
                <option value="buick century luxus (sw)" />
                <option value="buick century special" />
                <option value="buick electra 225 custom" />
                <option value="buick opel isuzu deluxe" />
                <option value="buick regal sport coupe (turbo)" />
                <option value="buick skyhawk" />
                <option value="buick skylark" />
                <option value="chevrolet impala" />
                <option value="chevrolet monte carlo" />
                <option value="chevrolet vega 2300" />
                <option value="dodge challenger se" />
                <option value="dodge colt (sw)" />
                <option value="dodge colt hardtop" />
                <option value="dodge coronet custom" />
                <option value="dodge coronet custom (sw)" />
                <option value="dodge d200" />
                <option value="dodge dart custom" />
                <option value="dodge monaco (sw)" />
                <option value="dodge rampage" />
                <option value="honda accord" />
                <option value="honda accord cvcc" />
                <option value="honda accord lx" />
                <option value="honda civic" />
                <option value="honda civic (auto)" />
                <option value="honda civic 1300" />
                <option value="honda civic 1500 gl" />
                <option value="honda civic cvcc" />
                <option value="honda prelude" />
                <option value="isuzu D-Max " />
                <option value="isuzu D-Max V-Cross" />
                <option value="isuzu MU-X" />
                <option value="jaguar xf" />
                <option value="jaguar xj" />
                <option value="jaguar xk" />
                <option value="maxda glc deluxe" />
                <option value="maxda rx3" />
                <option value="mazda 626" />
                <option value="mazda glc" />
                <option value="mazda glc 4" />
                <option value="mazda glc custom" />
                <option value="mazda glc custom l" />
                <option value="mazda glc deluxe" />
                <option value="mazda rx-4" />
                <option value="mazda rx-7 gs" />
                <option value="mazda rx2 coupe" />
                <option value="mercury cougar" />
                <option value="mitsubishi g4" />
                <option value="mitsubishi lancer" />
                <option value="mitsubishi mirage" />
                <option value="mitsubishi mirage g4" />
                <option value="mitsubishi montero" />
                <option value="mitsubishi outlander" />
                <option value="mitsubishi pajero" />
                <option value="nissan clipper" />
                <option value="nissan dayz" />
                <option value="nissan fuga" />
                <option value="nissan gt-r" />
                <option value="nissan juke" />
                <option value="nissan kicks" />
                <option value="nissan latio" />
                <option value="nissan leaf" />
                <option value="nissan note" />
                <option value="nissan nv200" />
                <option value="nissan otti" />
                <option value="nissan rogue" />
                <option value="nissan teana" />
                <option value="nissan titan" />
                <option value="peugeot 304" />
                <option value="peugeot 504" />
                <option value="peugeot 504 (sw)" />
                <option value="peugeot 505s turbo diesel" />
                <option value="peugeot 604sl" />
                <option value="plymouth cricket" />
                <option value="plymouth duster" />
                <option value="plymouth fury gran sedan" />
                <option value="plymouth fury iii" />
                <option value="plymouth satellite custom (sw)" />
                <option value="plymouth valiant" />
                <option value="porcshce panamera" />
                <option value="porsche boxter" />
                <option value="porsche cayenne" />
                <option value="porsche macan" />
                <option value="renault 12tl" />
                <option value="renault 5 gtl" />
                <option value="saab 99e" />
                <option value="saab 99gle" />
                <option value="saab 99le" />
                <option value="subaru" />
                <option value="subaru baja" />
                <option value="subaru brz" />
                <option value="subaru dl" />
                <option value="subaru r1" />
                <option value="subaru r2" />
                <option value="subaru trezia" />
                <option value="subaru tribeca" />
                <option value="toyota carina" />
                <option value="toyota celica gt" />
                <option value="toyota celica gt liftback" />
                <option value="toyota corolla" />
                <option value="toyota corolla 1200" />
                <option value="toyota corolla 1600 (sw)" />
                <option value="toyota corolla liftback" />
                <option value="toyota corolla tercel" />
                <option value="toyota corona" />
                <option value="toyota corona hardtop" />
                <option value="toyota corona liftback" />
                <option value="toyota corona mark ii" />
                <option value="toyota cressida" />
                <option value="toyota mark ii" />
                <option value="toyota starlet" />
                <option value="toyota tercel" />
                <option value="toyouta tercel" />
                <option value="vokswagen rabbit" />
                <option value="volkswagen 1131 deluxe sedan" />
                <option value="volkswagen 411 (sw)" />
                <option value="volkswagen dasher" />
                <option value="volkswagen model 111" />
                <option value="volkswagen rabbit" />
                <option value="volkswagen rabbit custom" />
                <option value="volkswagen super beetle" />
                <option value="volkswagen type 3" />
                <option value="volvo 144ea" />
                <option value="volvo 145e (sw)" />
                <option value="volvo 244dl" />
                <option value="volvo 245" />
                <option value="volvo 246" />
                <option value="volvo 264gl" />
                <option value="volvo diesel" />
                <option value="vw dasher" />
                <option value="vw rabbit" />
              </datalist>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="carbody">
                Select Car Body Type:
              </label>
              <select
                id="carbody"
                name="carbody"
                value={data.carbody}
                onChange={handleChange}
              >
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="wagon">Wagon</option>
                <option value="convertible">Convertible</option>
                <option value="hardtop">Hardtop</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="drivewheel">
                Select Drive Wheel Type:
              </label>
              <select
                id="drivewheel"
                name="drivewheel"
                value={data.drivewheel}
                onChange={handleChange}
              >
                <option value="4wd">4wd</option>
                <option value="fwd">fwd</option>
                <option value="rwd">rwd</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="fueltype">
                Select Fuel Type:
              </label>
              <select
                id="fueltype"
                name="fueltype"
                value={data.fueltype}
                onChange={handleChange}
              >
                <option value="gas">Gas</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="doornumber">
                Select Door Number:
              </label>
              <select
                id="doornumber"
                name="doornumber"
                value={data.doornumber}
                onChange={handleChange}
              >
                <option value="four">Four</option>
                <option value="two">Two</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="cylindernumber">
                Select Cylinder Number:
              </label>
              <select
                id="cylindernumber"
                name="cylindernumber"
                value={data.cylindernumber}
                onChange={handleChange}
              >
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
                <option value="six">Six</option>
                <option value="eight">Eight</option>
                <option value="twelve">Twelve</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="fuelsystem">
                Select Fuel System:
              </label>
              <select
                id="fuelsystem"
                name="fuelsystem"
                value={data.fuelsystem}
                onChange={handleChange}
              >
                <option value="1bbl">1bbl</option>
                <option value="2bbl">2bbl</option>
                <option value="4bbl">4bbl</option>
                <option value="spfi">spfi</option>
                <option value="mpfi">mpfi</option>
                <option value="mfi">mfi</option>
                <option value="idi">idi</option>
                <option value="spdi">spdi</option>
              </select>
            </div>
            <div>
              <label htmlFor="Selectbox_label" for="enginetype">
                Select Engine Type:
              </label>
              <select
                id="enginetype"
                name="enginetype"
                value={data.enginetype}
                onChange={handleChange}
              >
                <option value="l">l</option>
                <option value="dohc">dohc</option>
                <option value="ohc">ohc</option>
                <option value="dohcv">dohcv</option>
                <option value="rotor">rotor</option>
                <option value="ohcv">ohcv</option>
                <option value="ohcf">ohcf</option>
              </select>
            </div>
            <div>
              <input
                id="enginesize"
                name="enginesize"
                type="number"
                placeholder="Enter Engine Size"
                value={data.enginesize}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="curbweight"
                name="curbweight"
                type="number"
                placeholder="Enter Curb Weight"
                value={data.curbweight}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="horsepower"
                name="horsepower"
                type="number"
                placeholder="Enter Horsepower"
                value={data.horsepower}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="carwidth"
                name="carwidth"
                type="number"
                placeholder="Enter Car Width"
                value={data.carwidth}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="carlength"
                name="carlength"
                type="number"
                placeholder="Enter Car Length"
                value={data.carlength}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="active:scale-90 text-white  bg-linear-to-b from-gray-700 to-gray-950 rounded-3xl px-10 py-1"
            >
              Predict
            </button>
          </div>
        </form>
        {prediction && (
          <div className="mt-4 mr-10  text-xl font-bold text-gray-800">
            Predicted Price: ${prediction.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
