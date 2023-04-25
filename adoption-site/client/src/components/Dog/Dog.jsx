import React from "react";
import "./Dog.css";

function Dog(props) {
  const { dog } = props;
  const handelC = () => {
    alert("Congratulation! You've adoptted a furry friend for life!");
  };
  return (
    <div className="Dog-Container">
      <img className="image" src={dog.img} alt="img" />
      <p className="text">
        <u>Hi!My name is:</u>
        <div>{dog.name}</div>
        <div>I'm {dog.age} years old </div>
        <u>My breed is:</u>
        <div>{dog.breed}</div>
      </p>

      <button class="Button-Adopt" onClick={handelC}>
        <img
          className="paw"
          src="https://cdn-icons-png.flaticon.com/512/12/12638.png"
          alt="paw"
        ></img>
        Click to adopt
      </button>
    </div>
  );
}

export default Dog;
