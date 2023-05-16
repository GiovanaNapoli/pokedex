import React from 'react'
import { Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { api } from '../../services/api'
import { PokemonType, PokemonTypes } from '../../types'
import { Feather } from '@expo/vector-icons'
import { TabsMenu } from '../../components'

type RouteParams = {
  pokemonId: number
}

type PokemonDetails = {
  types: PokemonType[];
  name: string;
  id: number;
  stats: { base_stat: number; effort: number; stat: { name: string; url: string; } }[];
  abilities: { ability: { name: string; url: string; }}[];
}

enum MenuTabs {
  ABOUT,
  STATS,
  EVOLUTIONS
}

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = React.useState<PokemonDetails>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [tabActive, setActive] = React.useState<number>(0);

  const { goBack } = useNavigation();

  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;

  const getPokemonById = async () => {
    try {
      const response = await api.get(`pokemon/${pokemonId}/`);
      const { types, stats, abilities, id, name } = response.data;

      setPokemonDetails({ abilities, id, name, stats, types })
      setLoading(false);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => { getPokemonById() }, [pokemonId]);

  const tabs = [{
    title: 'About',
    value: MenuTabs.ABOUT
  }, {
    title: 'Stats',
    value: MenuTabs.STATS
  }, {
    title: 'Evolution',
    value: MenuTabs.EVOLUTIONS
  }]

  const Details: JSX.Element[] = [<Text>Pokédex Data</Text>, <Text>Base Stats</Text>, <Text>Evolution Chart</Text>]

  return loading ? (
    <S.LoadingScreen>
      
    </S.LoadingScreen>
  ) : (
    <S.Container type={pokemonDetails?.types[0].type.name as PokemonTypes}>
      <S.Header>
        <S.BackButton onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </S.BackButton>
        <S.LeftSide>
          <S.PokemonImage source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`}} />
        </S.LeftSide>
        <S.RightSide>
          <S.PokemonId>#{pokemonDetails?.id}</S.PokemonId>
          <S.PokemonName>{pokemonDetails?.name}</S.PokemonName>
          <S.ContentType>
            {pokemonDetails?.types.map(({type}) => (
              <S.PokemonType key={type.name} type={type.name as PokemonTypes}>
                <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
              </S.PokemonType>
            ))}
          </S.ContentType>
        </S.RightSide>
      </S.Header>
      <S.DetailsWrapper>
        <TabsMenu tabs={tabs} tabActive={tabActive} setTabActive={setActive}/>
        <S.DetailsContent>
          {Details[tabActive]}
        </S.DetailsContent>
      </S.DetailsWrapper>
    </S.Container>
  );
};

export default Details;
