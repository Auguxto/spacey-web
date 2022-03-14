import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import {
  CarouselContainer,
  CarouselImage,
  Container,
  ContentContainer,
  Description,
  MarsImage,
  Subscribe,
  SubscribeButton,
  SubscribeImage,
  SubscribeTexts,
  SubscribeTitle,
  SubTitle,
  Texts,
  Title,
  Top,
} from "./styles";

import img1 from "../../assets/carousel/1.png";
import img2 from "../../assets/carousel/2.png";
import img3 from "../../assets/carousel/3.png";

function About() {
  const swiper = useSwiper();

  return (
    <Container>
      <ContentContainer>
        <Top>
          <MarsImage />
          <Texts>
            <SubTitle>POR QUE MARTE?</SubTitle>
            <Title>Sobre o planeta vermelho</Title>
            <Description>
              A uma distância média de 140 milhões de milhas, Marte é um dos
              vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou
              menos a metade da distância da Terra do Sol, então ainda tem luz
              solar decente. Está um pouco frio, mas podemos esquentar. Sua
              atmosfera é composta principalmente de CO2 com um pouco de
              nitrogênio e argônio e alguns outros oligoelementos, o que
              significa que podemos cultivar plantas em Marte apenas comprimindo
              a atmosfera.
            </Description>
            <Description>
              A gravidade em Marte é cerca de 38% da da Terra, então você seria
              capaz de levantar coisas pesadas e dar voltas. Além disso, o dia
              está notavelmente próximo ao da Terra.
            </Description>
          </Texts>
        </Top>
        <Subscribe>
          <SubscribeTexts>
            <SubscribeImage />
            <SubscribeTitle>
              O caminho para
              <br /> tornar a humanidade
              <br /> multiplanetária.
            </SubscribeTitle>
            <SubscribeButton href="#">Inscreva-se agora</SubscribeButton>
          </SubscribeTexts>
          <CarouselContainer>
            <Swiper spaceBetween={50} slidesPerView={3} allowSlideNext={true}>
              <SwiperSlide>
                <CarouselImage src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselImage src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselImage src={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselImage src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselImage src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselImage src={img3} />
              </SwiperSlide>
            </Swiper>
          </CarouselContainer>
        </Subscribe>
      </ContentContainer>
    </Container>
  );
}

export default About;
