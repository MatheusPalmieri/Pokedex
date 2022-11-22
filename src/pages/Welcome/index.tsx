import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "./pokemon.json";
import * as S from "./style";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
          <AnimatedLottieView source={pokemonAnimation} autoPlay loop />
      </S.Content>
      <S.Footer>
        <S.Title>Welcome</S.Title>
        <S.SubTitle>Matheus</S.SubTitle>
      </S.Footer>
    </S.Container>
  );
}
