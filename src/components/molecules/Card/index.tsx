import React from 'react'
import * as S from './styles'
import { TouchableOpacityProps } from 'react-native';
import { Pokemon, PokemonTypes } from '../../../types';

type CardProps = {
  data: Pokemon
} & TouchableOpacityProps;

const Card = ({ data, ...rest }: CardProps) => {
  return (
    <S.PokemonCard {...rest} type={data.types[0].type?.name as PokemonTypes}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ContentType>
          {data.types.map(({type}) => (
            <S.PokemonType key={type.name} type={type.name as PokemonTypes}>
              <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.ContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokemonImage source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}} />
      </S.RightSide>
    </S.PokemonCard>
  );
}

export default Card;
