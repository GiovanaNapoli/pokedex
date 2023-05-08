import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native';

import * as S from './styles'
import { Card } from '../../components'

import { api } from '../../services/api';
import { Pokemon, PokemonType } from '../../types';

import PokeballHeader from '../../assets/pokeball.png'

type Request = {
  id: number;
  types: PokemonType;
}

const Home = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);

  const LIMIT_OF_POKEMONS = 20;

  const getMoreInfo = async (url: string): Promise<Request> => {
    const response = await api.get(url);
    const {id, types} = response.data;
    return {id, types};
  }

  const loadAllPokemons = async (offsetNumber = offset) => {
    if (loading) return;

    setLoading(true);
    const response = await api.get(`pokemon?offset=${offsetNumber}&limit=${LIMIT_OF_POKEMONS}`);
    const { results } = response.data;

    const payloadPokemons = await Promise.all(
      results.map( async (pokemon: Pokemon) => {
        const {id, types} = await getMoreInfo(pokemon.url)

        return {
          name: pokemon.name,
          id,
          types,
        }
      })
    )
    setOffset(offset + 20);
    setPokemons([...pokemons, ...payloadPokemons]);

    setLoading(false);
  }

  React.useEffect(() => {loadAllPokemons()}, []);

  const renderItem = React.useCallback(({item: pokemon, index}: ListRenderItemInfo<Pokemon>) => (
    <Card key={index} data={pokemon} />
  ), [pokemons])

  return (
    <S.Container>
      <S.Header source={PokeballHeader}>
        <S.Title>Pokédex</S.Title>
        {/* <S.Subtitle>Search for Pokémon by name or using the National Pokédex number.</S.Subtitle> */}
      </S.Header> 
      <FlatList
        initialNumToRender={0}
        data={pokemons}
        onEndReached={() => loadAllPokemons()}
        onEndReachedThreshold={0.1}
        keyExtractor={(item: Pokemon) => item.id.toString()}
        renderItem={renderItem}
        ListFooterComponent={() => <S.FooterList/>}
      />
    </S.Container>
  );
};

export default Home;
