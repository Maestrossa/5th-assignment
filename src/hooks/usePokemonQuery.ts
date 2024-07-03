import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types/pokemon';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch('/api/pokemons');
  if (!response.ok) {
    throw new Error('네트워크 응답 에러');
  }
  return response.json();
};

export const usePokemonQuery = () => {
  return useQuery<Pokemon[], Error>({ queryKey: ['pokemon'], queryFn: fetchPokemon });
};
