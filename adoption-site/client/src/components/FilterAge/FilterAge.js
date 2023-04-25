import React, { useState, useEffect } from "react";
import Cat from "../Cat/Cat";
import "./FilterAge.css";

function Filter(props) {
  const [age, setAge] = useState(20);
  const click5 = () => {
    setAge(5);
  };
  const clickAll = () => {
    setAge(20);
  };
  return (
    <div>
      <p className="Buttons">
        <button className="Button" onClick={clickAll}>
          All cats
        </button>

        <button className="Button" onClick={click5}>
          Less then 5 years old
        </button>
      </p>

      <p className="Cats">
        {props.filter &&
          props.filter.length > 0 &&
          props.filter
            .filter((cat) => cat.age < age)
            .map((filterCAT) => <Cat cat={filterCAT} />)}
      </p>
    </div>
  );
}
export default Filter;
