import {
  BannerContainer,
  BannerImage,
  Container,
  Texts,
  Top,
  Title,
  SubTitle,
  Description,
  Button,
  ButtonText,
  Qualities,
  Quality,
  QualityIcon,
  QualityDescription,
} from "./styles";

import rocket from "../../assets/icons/rocket.svg";
import mars from "../../assets/icons/mars.svg";
import telescope from "../../assets/icons/telescope.svg";

function Banner() {
  return (
    <Container>
      <Top>
        <Texts>
          <SubTitle>Finalmente é possível!</SubTitle>
          <Title>Sua jornada para Marte começa aqui.</Title>
          <Description>
            A primeira viagem para Marte estará disponivél apartir do dia
            <br />
            12/03/2028. Inscreva-se em nossa lista de espera.
          </Description>
          <Button>
            <ButtonText>Inscreva-se agora</ButtonText>
          </Button>
        </Texts>
        <BannerContainer>
          <BannerImage />
        </BannerContainer>
      </Top>
      <Qualities>
        <Quality>
          <QualityIcon src={rocket} />
          <QualityDescription>
            Foguetes com a mais alta tecnologia e conforto.
          </QualityDescription>
        </Quality>
        <Quality>
          <QualityIcon src={mars} />
          <QualityDescription>
            Mais de 100 missões consecutivas com sucesso.
          </QualityDescription>
        </Quality>
        <Quality>
          <QualityIcon src={telescope} />
          <QualityDescription>
            Experiencia única e exclusiva.
          </QualityDescription>
        </Quality>
      </Qualities>
    </Container>
  );
}

export default Banner;
