import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "./pokemon.json";
import * as S from "./style";
import { Button } from "../../components/Button";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              source={pokemonAnimation}
              style={{ width: 200 }}
              autoPlay
              loop
            />
          </S.WrapperImage>
        </S.WrapperAnimation>

        <S.Title>Welcome</S.Title>
        <S.SubTitle>Matheus</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title="Iniciar" />
      </S.Footer>
    </S.Container>
  );
}
