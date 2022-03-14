import styled from "styled-components";
import Image from "next/image";

import logo_light from "../../assets/logo/light.svg";
import mars from "../../assets/mars.svg";

export const Container = styled.div`
  background: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);

  margin-top: 80px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 1366px;

  flex-direction: column;

  margin: 0 auto;
`;

export const Top = styled.div`
  display: flex;

  align-items: center;
`;

export const MarsImage = styled(Image).attrs({
  src: mars,
  width: "621px",
  height: "621px",
})``;

export const Texts = styled.div`
  max-width: 600px;
  margin-left: 50px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 1px;

  color: #ffffff;

  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 5px;
  text-transform: uppercase;

  color: #f5d15f;

  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;

  color: #d5d5db;

  margin-top: 20px;
`;

export const Subscribe = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 80px;
`;

export const SubscribeTexts = styled.div``;

export const SubscribeImage = styled(Image).attrs({
  src: logo_light,
  width: "162px",
  height: "25px",
})`
  transform: translateX(-20px);
`;

export const SubscribeTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 1px;

  color: #ffffff;

  margin-top: 13px;
`;

export const SubscribeButton = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-decoration: none;

  color: #ff8c70;

  margin-top: 16px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 900px;

  align-items: center;
  gap: 10px;
`;

export const CarouselImage = styled(Image).attrs({
  width: "345px",
  height: "345px",
})``;
