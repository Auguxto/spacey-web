import { useState } from "react";
import {
  Button,
  ButtonText,
  Check,
  CheckContainer,
  CheckLabel,
  Container,
  ContentContainer,
  Description,
  FormContainer,
  FormImage,
  FormImageContainer,
  Input,
  InputName,
  SmokeContainer,
  SmokeImage,
  Ticket,
  Title,
} from "./styles";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <Ticket />
          <Title>
            Garanta sua vaga para
            <br /> a primeira viagem
          </Title>
          <Description>
            Preencha os campos abaixo para
            <br /> entrar na lista de espera
          </Description>
          <InputName>Nome</InputName>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputName>E-mail</InputName>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputName>Telefone</InputName>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <CheckContainer>
            <Check checked={checked} onChange={() => setChecked(!checked)} />
            <CheckLabel>Concordo em receber comunicações</CheckLabel>
          </CheckContainer>
          <Button>
            <ButtonText>Garantir minha vaga</ButtonText>
          </Button>
        </FormContainer>
        <FormImageContainer>
          <FormImage />
        </FormImageContainer>
      </ContentContainer>
      <SmokeContainer>
        <SmokeImage />
      </SmokeContainer>
    </Container>
  );
}

export default Form;
