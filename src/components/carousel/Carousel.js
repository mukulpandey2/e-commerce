import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";

const Carousel = ({ images }) => {
  const clickNext_ref = useRef(null);
  const clickPrev_ref = useRef(null);

  useEffect(() => {
    const sildes = document.querySelectorAll(".silder-image");
    let counter = 0;
    sildes.forEach((silde, index) => {
      silde.style.left = `${index * 100}%`;
    });

    const sildeImage = () => {
      sildes.forEach((silde, index) => {
        silde.style.transform = `translateX(-${counter * 100}%)`;
      });
    };
    const prev = () => {
      if (counter < 0) {
        counter = 0;
      } else {
        counter--;
        sildeImage();
      }
    };
    const next = () => {
      if (counter === sildes.length - 1) {
        counter = sildes.length - 1;
      } else {
        counter++;
        sildeImage();
      }
    };
    clickNext_ref.current = next;
    clickPrev_ref.current = prev;
    const handleAutoSlide = () => {
      setInterval(() => {
        if (counter === sildes.length) {
          counter = 0;
        } else {
          sildeImage();
          counter++;
        }
      }, 2000);
    };
    handleAutoSlide();
  }, []);

  return (
    <>
      <div className="sliderMain">
        <div className="sileder-imageWrap">
          {images.map((item, index) => {
            return <img src={item} className="silder-image" key={index} />;
          })}
        </div>
        <div>
          <div className="slide-dash"></div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
