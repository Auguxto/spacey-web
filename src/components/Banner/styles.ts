import styled from "styled-components";
import Image from "next/image";

import banner from "../../assets/banner/banner.svg";

export const Container = styled.div`
  display: flex;
  width: 1366px;

  flex-direction: column;

  margin: 0 auto;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;

  justify-content: space-between;
`;

export const Texts = styled.div`
  margin-top: 95px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 82px;

  letter-spacing: 1px;

  color: #ffffff;
`;

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 5px;
  text-transform: uppercase;

  color: #f5d15f;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 1px;

  margin-top: 24px;

  color: #d5d5db;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 264px;
  height: 52px;

  margin-top: 32px;

  background: #e85937;
  border-radius: 6px;
  border: none;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  color: #ffffff;
`;

export const BannerContainer = styled.div`
  z-index: 2;
  transform: translateY(-50px);
`;

export const BannerImage = styled(Image).attrs({
  src: banner,
  width: "550px",
})``;

export const Qualities = styled.div`
  display: flex;

  flex: 1;

  justify-content: space-around;

  margin-top: 100px;
`;

export const Quality = styled.div`
  display: flex;

  flex-direction: column;
  align-items: start;

  width: 200px;
  height: 120px;
`;

export const QualityIcon = styled(Image).attrs({
  width: "56px",
  height: "56px",
})``;

export const QualityDescription = styled.span`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 1px;

  color: #d5d5db;

  margin-top: 5px;
`;
