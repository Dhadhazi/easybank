import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 300px;
  width: 260px;
  margin: 50px 0px;
`;

const Title = styled.h3`
  margin: 35px 0px;
  font-weight: 300;
  font-size: 24px;
  color: hsl(233, 26%, 24%);
`;
const Description = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
`;

type Props = {
  icon: string;
  title: string;
  description: string;
};
export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <Card>
      <img src={icon} alt={`${title} icon`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
