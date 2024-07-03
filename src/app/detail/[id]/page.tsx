import DetailComponent from '@/components/DetailComponent';
import React from 'react';

interface PokemonDetailPageProps {
  params: { id: string };
}

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ params }) => {
  const { id } = params;

  return <DetailComponent id={id} />;
};

export default PokemonDetailPage;
