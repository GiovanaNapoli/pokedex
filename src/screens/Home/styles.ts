import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWith = Dimensions.get('window').width;

export const Container = styled.View`${({theme}) => css`
    background: ${theme.colors.background};
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

export const Subtitle = styled.Text`${({theme}) => css`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${theme.colors.detail};
`}`

export const Header = styled.ImageBackground`${({theme}) => css`
  width: ${windowWith}px;
  height: 220px;
  background-color: ${theme.colors.background};
  margin-left: -20px;
  padding: 20px;
`}`

export const FooterList = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  padding: 10px;
`