import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundCard.water};
  `}
`;

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.boxType.water};
    width: 200px;
    height: 300px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg);
  `}
`;

export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    height: 30%;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 20px;
    font-size: 36px;
    color: ${theme.colors.background};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 20px;
    font-size: 18px;
    color: ${theme.colors.background};
  `}
`;
