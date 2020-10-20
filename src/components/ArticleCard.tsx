import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 390px;
  width: 250px;
  background-color: white;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0px 0px;
`;

const DetailBox = styled.div`
  margin: 0px 25px;
`;

const Author = styled.h5`
  font-size: 10px;
  font-weight: 300;
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 16px;
  margin: 5px 0px;
  color: hsl(233, 26%, 24%);
  :hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
  }
`;
const Description = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

type Props = {
  image: string;
  author: string;
  title: string;
  description: string;
};
export const ArticleCard = ({ image, author, title, description }: Props) => {
  return (
    <Card>
      <Image src={image} alt={`${title} icon`} />
      <DetailBox>
        <Author>by {author}</Author>
        <Title>{title}</Title>
        <Description>{description}...</Description>
      </DetailBox>
    </Card>
  );
};
