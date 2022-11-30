import styled, { css } from "styled-components/native";
import { TypeName } from ".";

import * as Progress from "react-native-progress";

type TypeProps = {
  type: TypeName;
};

export const FFFFFFFFFFFFFFFFF = styled.View`
  ${({ theme }) => css``}
`;

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    top: 70px;
    left: 20px;
  `}
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Content = styled.View`
  margin-left: 30px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: 28px;
    line-height: 38px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.text_white};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: 61px;
    height: 25px;
    background: ${theme.colors.boxType[type]};
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_white};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
  `}
`;

export const DotsImage = styled.Image`
  width: 85px;
  position: absolute;
  right: -20px;
  top: 220px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 20px;
    background-color: ${theme.colors.background};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: -40px;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.boxType[type]};
  `}
`;

export const StatusBar = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Attributes = styled.Text`
  ${({ theme }) => css`
    width: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: ${theme.colors.light_text};
  `}
`;

export const AttributesValue = styled.Text`
  ${({ theme }) => css`
    width: 27px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    margin-left: 20px;
    color: ${theme.colors.detail};
  `}
`;

export const ContentBar = styled.View`
  ${({ theme }) => css`
    margin-left: 20px;
  `}
`;

export const ProgressBar = styled(Progress.Bar)<TypeProps>``;

export const Ability = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 20px;
    text-transform: capitalize;
    color: ${theme.colors.detail};
  `}
`;
