import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  margin: 0;
  height: 40px;
  width: 160px;
  border-radius: 20px;
  color: white;
  font-weight: 400;
  background: linear-gradient(
    90deg,
    hsl(136, 65%, 51%) 0%,
    hsl(192, 70%, 51%) 100%
  );
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const RequestInviteButton = () => {
  return <Button>Request Invite</Button>;
};
