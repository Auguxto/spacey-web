import {
  Container,
  ContentContainer,
  Link,
  Links,
  Logo,
  SocialIcon,
  Socials,
} from "./styles";

import linkedin from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <Container>
      <ContentContainer>
        <Logo />
        <Socials>
          <SocialIcon src={linkedin} />
          <SocialIcon src={facebook} />
          <SocialIcon src={instagram} />
        </Socials>
        <Links>
          <Link href="#">Início</Link>
          <Link href="#">Sobre nós</Link>
          <Link href="#">Missões</Link>
          <Link href="#">Contato</Link>
        </Links>
      </ContentContainer>
    </Container>
  );
}

export default Footer;
