import React from "react";
import { useCounter } from "./useCounter";
import { StyledBackground, Image, Title } from "./styled";
import { landscapeImages, foodImages } from "./backgrundImagesArray";

const Background = () => {
  const counter = useCounter();

  return (
    <StyledBackground>
      <Image backgroundImage={foodImages[counter]}></Image>
      <Image ImageSmall backgroundImage={landscapeImages[counter]}></Image>
      <Title>
        Eat & <br />
        Enjoy the food
      </Title>
    </StyledBackground>
  );
};
export default Background;
