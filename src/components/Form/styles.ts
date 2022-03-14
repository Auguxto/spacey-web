import styled from "styled-components";
import Image from "next/image";

import rocket from "../../assets/rocket.svg";
import smoke from "../../assets/smoke.svg";
import ticket from "../../assets/icons/ticket.svg";

export const Container = styled.div`
  background: #0d0e13;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 1366px;

  margin: 0 auto;
`;

export const FormContainer = styled.div`
  width: 520px;
  height: 792px;

  background: #0e0d40;
  border-radius: 20px;
  margin-top: 200px;

  padding: 50px;
`;

export const FormImage = styled(Image).attrs({
  src: rocket,
})`
  z-index: 1;
`;

export const FormImageContainer = styled.div`
  margin: 0 auto;
  margin-top: 180px;

  animation: hover 3s ease-in-out infinite;

  @keyframes hover {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
`;

export const Ticket = styled(Image).attrs({
  src: ticket,
  width: "56px",
  height: "56px",
})``;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 1px;

  color: #ffffff;

  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  opacity: 0.7;

  margin-bottom: 32px;
`;

export const InputName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;

  border: 1px solid #d5d5db;
  border-radius: 6px;

  background: transparent;

  margin-bottom: 24px;
  padding-left: 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #d5d5db;
`;

export const CheckContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 16px;
`;

export const Check = styled.input.attrs({
  type: "checkbox",
})`
  width: 24px;
  height: 24px;

  border-radius: 6px;
  border: 1.5px solid #ffffff;
`;

export const CheckLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #d5d5db;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 65px;

  margin-top: 50px;

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

export const SmokeContainer = styled.div`
  width: 100%;

  text-align: center;

  margin-top: -100px;

  z-index: 2;
`;

export const SmokeImage = styled(Image).attrs({
  src: smoke,
})``;
