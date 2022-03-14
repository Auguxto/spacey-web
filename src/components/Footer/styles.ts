import styled from "styled-components";
import Image from "next/image";

import logo_light from "../../assets/logo/light.svg";

export const Container = styled.div`
  background: #0d0e13;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 1366px;

  margin: 0 auto;
  padding: 50px;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Image).attrs({
  src: logo_light,
  width: "227px",
  height: "35px",
})``;

export const Socials = styled.div`
  display: flex;
  gap: 18px;
`;

export const SocialIcon = styled(Image).attrs({
  width: "25px",
  height: "25px",
})``;

export const Links = styled.div`
  display: flex;

  gap: 50px;
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-decoration: none;

  color: #ffffff;
`;
