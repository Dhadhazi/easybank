import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  margin: 0;
  outline: none;
  height: 70px;
  font-weight: 300;
  font-size: 14px;
  opacity: 0.5;
  color: black;
  margin: 10px;
  background-color: white;
  border-bottom: 5px solid white;
  :hover {
    opacity: 1;
    cursor: pointer;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-image: linear-gradient(
        90deg,
        hsl(136, 65%, 51%) 0%,
        hsl(192, 70%, 51%) 100%
      )
      1;
  }
  @media (max-width: 850px) {
    font-size: 18px;
    color: hsl(233, 26%, 24%);
    opacity: 1;
  }
`;

type Props = {
  title: string;
};

export const TopmenuItem = ({ title }: Props) => {
  return <Button>{title}</Button>;
};
