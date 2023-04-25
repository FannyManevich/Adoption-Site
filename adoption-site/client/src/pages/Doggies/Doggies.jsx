import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Dog from "../../components/Dog/Dog";
function Doggies() {
  const [initDogs, setInitDogs] = useState();

  useEffect(() => {
    axios.get("/dogs").then((res) => setInitDogs(res.data));
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <p>
        <p className="Title">Choose your furry friend</p>

        <ul className="Doggies">
          {initDogs &&
            initDogs.length > 0 &&
            initDogs.map((dogs, index) => (
              <li key={initDogs.index} className="Doggies_list">
                <Dog
                  className="ImageSlider"
                  key={index}
                  dog={initDogs[index]}
                />
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
}
export default Doggies;
