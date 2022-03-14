import styled from "styled-components";
import Image from "next/image";

import logo_light from "../../assets/logo/light.svg";

export const Container = styled.div`
  display: flex;
  width: 1366px;

  margin: 0 auto;

  z-index: 1;

  padding: 24px;
  padding-left: 0px;
`;

export const Logo = styled(Image).attrs({
  src: logo_light,
  width: "201px",
  height: "41.24px",
})`
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
