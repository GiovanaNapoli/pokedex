import React from 'react'
import { useRoute } from '@react-navigation/native'
import * as S from './styles'
import { api } from '../../services/api'
import { PokemonType, PokemonTypes } from '../../types'

type RouteParams = {
  pokemonId: number
}

type PokemonDetails = {
  types: PokemonType[];
  name: string;
  id: number;
  stats: { base_stat: number; effort: number; stat: { name: string; url: string; } }[];
  abilities: {ability: { name: string; url: string; }}[];
}

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = React.useState<PokemonDetails>()
  const [loading, setLoading] = React.useState<boolean>(true);

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

  React.useEffect(() => { getPokemonById() }, [pokemonId])

  console.log(pokemonDetails)

  return loading ? (
    <S.LoadingScreen>
      
    </S.LoadingScreen>
  ) : (
    <S.Container type={pokemonDetails?.types[0].type.name as PokemonTypes}>
      <S.Header>
        <S.LeftSide>
          <S.PokemonImage source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`}} />
        </S.LeftSide>
        <S.RightSide>
          <S.PokemonId>#{pokemonDetails?.id}</S.PokemonId>
          <S.PokemonName>{pokemonDetails?.name}</S.PokemonName>
          <S.ContentType>
            {pokemonDetails?.types.map(({type}) => (
              <S.PokemonType type={type.name as PokemonTypes}>
                <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
              </S.PokemonType>
            ))}
          </S.ContentType>
        </S.RightSide>
      </S.Header>
    </S.Container>
  );
};

export default Details;
