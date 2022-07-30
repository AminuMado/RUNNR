import { useState } from "react";
import "./Carousel.css";
export const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeActiveIndex = (type, index) => {
    if (type === "+") {
      if (activeIndex >= images.length - 1) return;
      setActiveIndex(++index);
    } else {
      if (activeIndex <= 0) return;
      setActiveIndex(--index);
    }
  };
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? "carousel-item active" : "carousel-item"
            }
          >
            <img src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        onClick={() => {
          changeActiveIndex("-", activeIndex);
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        onClick={() => {
          changeActiveIndex("+", activeIndex);
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
