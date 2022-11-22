import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Content = styled.View`
  height: 70%;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    height: 30%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.backgroundWater};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.text};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 20px;
    font-size: 14px;
    color: ${theme.colors.text};
  `}
`;
