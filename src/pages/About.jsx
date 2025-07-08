import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  function scrollSlider(direction) {
    const container = document.getElementById("sliderContainer");
    const scrollAmount = 200;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
  return (
    <>
      <main>
        <div className="top-part">
          <h1>About Cat A Burger🐾</h1>
        </div>

        <div className="bottom-part">
          <p>Welcome to <strong>Cat A Burger 😸🍔</strong>, where every bite is puurrrfection!
            Located in a cozy neighborhood in Osaka, Cat A Burger was created from the love of juicy, handcrafted
            burger and a commitment to a quality you can taste. We are proud to serve <strong>100% halal</strong>
            , freshly prepared meals. From our housemade patties to our hand-cut fries, everything is made with
            care, curiousity, and a litle bit of kitty mischief 😼.</p>

          <p>Come for the burgers, stay for the cozy vibes, and don't be surprised if you spot a few whiskers in our
            decor. Cat A Burger is more than a meal– its a meowment. 🐾</p>


          <section className="slider-section">
            <button className="slider-arrow left" onClick={() => scrollSlider('left')}>&#10094;</button>
            <div className="slider-container" id="sliderContainer">
              <div className="slider-track">
                <img src="/images/image.png" alt="" />
                <img src="/images/image10.png" alt="" />
                <img src="/images/image4.png" alt="" />
                <img src="/images/image6.png" alt="" />
                <img src="/images/image3.png" alt="" />
                <img src="/images/image5.png" alt="" />
                <img src="/images/image8.png" alt="" />
                <img src="/images/image2.png" alt="" />
              </div>
            </div>
            <button className="slider-arrow right" onClick={() => scrollSlider('right')}>&#10095;</button>
          </section>
          <Link to="/Menu" className="order-button">Order Now 😺</Link>
        </div>
      </main>
    </>
  );
};

export default About;

