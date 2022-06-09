import React from "react";
import Carousel from "./common/Carousel";
import "./style.scss";
function HorizontalSlideShow(props) {
  const { children, data, handleActive } = props;
  console.log("children", children);
  return (
    <div className="horizontalSlideShow container mx-auto">
      <Carousel data={data} handleActive={handleActive} />
      {children}
    </div>
  );
}

export default HorizontalSlideShow;
