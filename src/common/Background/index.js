import React from "react";
import { useCounter } from "./useCounter";
import { StyledBackground, ImageBig, ImageSmall, Title } from "./styled";
import { landscapeImages, foodImages } from "./backgrundImagesArray";

const Background = () => {
  const counter = useCounter();

  return (
    <StyledBackground>
      <ImageBig backgroundImage={foodImages[counter]}></ImageBig>
      <ImageSmall backgroundImage={landscapeImages[counter]}></ImageSmall>
      <Title>
        Eat & <br />
        Enjoy the food
      </Title>
    </StyledBackground>
  );
};
export default Background;
