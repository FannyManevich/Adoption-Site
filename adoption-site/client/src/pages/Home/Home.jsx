import React from "react";
import "./Home.css";

import Navbar from "/sandbox/client/src/components/Navbar/Navbar";
import Slides from "/sandbox/client/src/components/Slides/Slides.js";

function Home() {
  return (
    <div>
      <Navbar />

      <p className="Title">Doggies of the month</p>

      <Slides />

      <p className="aboutPOM">
        <u className="AboutUs">About us</u>
        <div>
          Oscar and Joe are brothers from the same litter.They are both
          australian shepherds,born on 11/28/2020, weighs about 50 pounds, both
          are neutered and up-to date on all vaccinations.
        </div>
        <div>
          There both young and active dogs that love going for walks but also
          pretty calm and well-behaved in the house.
        </div>
        Oscar has excellent leash manners - doesnt pull and walks by the trainer
        nicely, his allso a very smart and protective dog, so he will need an
        owner who can set boundaries from the beginning.
        <div>
          Joe is shy when meeting new people but has not shown any aggression,
          but he is a very smart and protective dog.
          <div>
            They both lived together in a home with a cat and did well with it,
            and there also ok with large-sized dogs.
          </div>
        </div>
      </p>
    </div>
  );
}
export default Home;
