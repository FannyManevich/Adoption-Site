import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/FilterAge/FilterAge.js";

function Kitties() {
  const [initCats, setInitCats] = useState();

  useEffect(() => {
    axios.get("/cats").then((res) => setInitCats(res.data));
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div>
        <p className="Title">Choose your purrrrry friend</p>

        <Filter filter={initCats} />
      </div>
    </div>
  );
}
export default Kitties;
