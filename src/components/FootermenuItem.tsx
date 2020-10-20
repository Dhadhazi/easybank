import React from "react";
import styled from "styled-components";

const MenuItem = styled.div`
  width: 180px;
  font-size: 14px;
  font-weight: 300;
  margin: 10px 0px;
  :hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
  }
`;

type Props = {
  title: string;
};
export const FootermenuItem = ({ title }: Props) => {
  return <MenuItem>{title}</MenuItem>;
};
