export type PokemonType = {
  type: {
    name: string;
    url: string;
  }
}

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
}

export type PokemonTypes = 
      | 'grass'
      | 'fire'
      | 'water'
      | 'poison'
      | 'normal'
      | 'bug'
      | 'flying'
      | 'electric'
      | 'ground'
      | 'fairy';
  