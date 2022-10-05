import React, { useState, useEffect } from "react";
import "./slider.scss";

// API Kald
import { getBanner } from "../../helpers/getCall";

const Slider = () => {
  const [banner, setBanner] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //Index til slides
  const [slideIndex, setSlideIndex] = useState(0); // Føste img har index 0

  // T er til min timeout
  let t;

  useEffect(() => {
    setLoading(true);

    getBanner()
      .then((data) => {
        setError(false);
        setBanner(data);
      })
      .catch((err) => {
        setError(true);
        setBanner();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (banner) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      clearTimeout(t);

      if (slideIndex >= slides.length) {
        setSlideIndex(0);
        return;
      }

      if (slideIndex < 0) {
        setSlideIndex(slides.length - 1);
        return;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");

      t = setTimeout(() => setSlideIndex(slideIndex + 1), 5000);
    }

    //Cleanup-function
    return () => {
      clearTimeout(t);
    };
  }, [slideIndex, banner]);

  return (
    <div className="slider_con">
      {banner && (
        <div>
          {banner.map((s) => (
            <div className="mySlides fade" key={s._id}>
              <img
                src={"http://localhost:4444/images/banner/" + s.image}
                className="s_images"
              />
              <div className="slider_text_con">
                  <h2>{s.title}</h2>
                  <h1>{s.content}</h1>
              </div>
            </div>
          ))}
          <div className="dot_container">
            {banner.map((s, i) => (
              <span
                className="dot"
                key={"dot" + i}
                onClick={() => setSlideIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
