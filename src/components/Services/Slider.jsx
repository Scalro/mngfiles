import React, { useEffect, useState } from "react";
import "./Slider.css";
import gallary from "../Services/gallary";

function Slider() {
  const [gallery] = useState(gallary);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = gallery.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, gallery]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="slider">
      <section className="section">
        <div className="section-center">
          {gallery.map((gallery, galleryIndex) => {
            const { id, image, name } = gallery;
            let position = "nextSlide";
            if (galleryIndex === index) {
              position = "activeSlide";
            }
            if (
              galleryIndex === index - 1 ||
              (index === 0 && galleryIndex === gallery.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}></button>
          <button className="next" onClick={() => setIndex(index + 1)}></button>
        </div>
      </section>
    </div>
  );
}

export default Slider;
