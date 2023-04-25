import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Slides/Slides.css";
import Dog from "../Dog/Dog";

function Slides() {
  const [initDogs, setInitDogs] = useState();

  useEffect(() => {
    axios.get("/dogs").then((res) => setInitDogs(res.data));
  }, []);
  useEffect(() => {}, []);

  console.log(initDogs);
  return (
    <div className="ImageSlider">
      {initDogs &&
        initDogs.length > 0 &&
        initDogs
          .filter(function (v, index) {
            return index < 3;
          })
          .map((dog, index) => (
            <Dog className="ImageSlider" key={index} dog={initDogs[index]} />
          ))}
    </div>
  );
}
export default Slides;
