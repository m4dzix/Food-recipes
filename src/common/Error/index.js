import React from "react";
import { Wrapper, Subheader, Text, Button } from "./styled";
import ErrorIcon from "../../assets/danger.svg";

const Error = () => (
  <Wrapper>
    <img src={ErrorIcon} alt="Error" />
    <Subheader>Ooops! Something went wrong...</Subheader>
    <Text> Please check your network connection and try again</Text>
    <Button>Back to home page</Button>
  </Wrapper>
);

export default Error;
