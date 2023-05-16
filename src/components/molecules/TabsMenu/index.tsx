import React from 'react'
import * as S from './styles'
import { TouchableOpacityProps } from 'react-native';
import { Pokemon, PokemonTypes } from '../../../types';


import dotsImage from '../../../assets/img/dots.png'
import pokeballCardImage from '../../../assets/img/pokeballCard.png';

type TabsMenuProps = {
  tabs: {title: string; value: number;}[]
} & TouchableOpacityProps;

const TabsMenu = ({ tabs }: TabsMenuProps) => {
  const [tabActive, setTabActive] = React.useState<number>(0);
  const onPressTab = (value: number) => setTabActive(value);

  return (
    <S.DetailsMenu>
      {tabs.map(({title, value}) => (
        <S.DetailMenuButton onPress={() => onPressTab(value)}>
          <S.DetailsMenuText tabActive={value === tabActive}>
            {title}
          </S.DetailsMenuText>
        </S.DetailMenuButton>
      ))}
    </S.DetailsMenu>
  );
}

export default TabsMenu;
