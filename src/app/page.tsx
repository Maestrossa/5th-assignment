'use client';
import PokemonList from '../components/PokemonList';
import { usePokemonQuery } from '../hooks/usePokemonQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const PokemonPageContent: React.FC = () => {
  const { data: pokemonData, isLoading, error } = usePokemonQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!pokemonData) return <div>No data available</div>;
  console.log(pokemonData);

  return <PokemonList pokemonData={pokemonData} />;
};

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonPageContent />
    </QueryClientProvider>
  );
}
