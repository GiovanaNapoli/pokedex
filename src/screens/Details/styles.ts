import styled, { css } from "styled-components/native";
import { PokemonTypes } from "../../types";

type PokemonType = {
  type: PokemonTypes
}

export const Container = styled.View<PokemonType>`${({theme, type}) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    padding: 20px;
    flex: 1;
  `}
`;

export const Title = styled.Text`${({theme}) => css`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: ${theme.colors.text};
  margin-bottom: 10px;
`}`

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
});

export const Header = styled.View`
  height: 340px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
export const LeftSide = styled.View`
  width: 50%;
`;
export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const RightSide = styled.View`
`;

export const PokemonId = styled.Text`${({theme}) => css`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: rgba(23, 23, 27, 0.6);
`}`;

export const PokemonName = styled.Text`${({theme}) => css`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-transform: capitalize;
  color: ${theme.colors.background};
`}`

export const ContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background-color: ${theme.colors.boxType[type]};
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.Text`${({theme}) => css`
  fontWeight: 400;
  fontSize: 12px;
  lineHeight: 14px;
  textTransform: capitalize;
  color: ${theme.colors.background};
`}`