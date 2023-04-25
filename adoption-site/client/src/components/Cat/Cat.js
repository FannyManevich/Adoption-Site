import React from "react";
import "./Cat.css";

function Cat(props) {
  const { cat } = props;
  const handelC = () => {
    alert("Congratulation! You've adoptted a purrrrry friend for life!");
  };
  return (
    <div className="Cat-Container">
      <img className="image" src={cat.img} alt="img" />
      <p className="text">
        <u>Hi!My name is:</u>
        <div>{cat.name}</div>
        <div>I'm {cat.age} years old </div>
        <u>My breed is:</u>
        <div>Who the hell knows?!</div>
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

export default Cat;
