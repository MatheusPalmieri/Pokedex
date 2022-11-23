import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "./pokemon.json";
import * as S from "./style";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const { navigate } = useNavigation();

  const handleNavigation = () => {
    navigate("Home");
  };

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
        <Button title="Iniciar" onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  );
}
