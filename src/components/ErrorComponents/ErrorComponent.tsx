import React from "react";
import styled from "styled-components";

interface ErrorTypes {
  name: string;
}

const ErrorComponent: React.FC<ErrorTypes> = ({ name }) => {
  return <ErrorComponentWrap>{name}</ErrorComponentWrap>;
};

const ErrorComponentWrap = styled.section``;

export default ErrorComponent;
