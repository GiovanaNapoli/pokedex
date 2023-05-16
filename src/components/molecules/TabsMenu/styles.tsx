import styled from "styled-components/native";

type MenuActions = {
  tabActive: boolean
}

export const DetailsMenu = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DetailMenuButton = styled.TouchableOpacity`
  width: 33.33%;
  align-items: center;
  justify-content: center;
`;

export const DetailsMenuText = styled.Text<MenuActions>`
  font-weight: ${(props) => props.tabActive ? 700 : 400};
  font-size: 16px;
  color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => props.tabActive ? 1 : 0.5}
`;