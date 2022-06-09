import React from "react";
import "./style.scss";
function Carousel({ data, handleActive }) {
  const renderImg = (data) => {
    return data?.map((item, index) => {
      return (
        <div
          className={`carousel__item 
      
          `}
          onClick={() => handleActive(data, index)}
          key={index}
        >
          <img
            className="w-full h-full objectfit-cover"
            src={item.imgUrl}
            alt={item.title}
          />
          {2 === index && <p>{item.title}</p>}
        </div>
      );
    });
  };

  return <div className="carousel container ">{renderImg(data)}</div>;
}

export default Carousel;
