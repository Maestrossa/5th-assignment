'use client';
import { Pokemon } from '@/types/pokemon';
import Link from 'next/link';
import React from 'react';

interface PokemonListProps {
  pokemonData: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  return (
    <>
      <header className="text-center my-5 text-xl font-bold">포켓몬 도감</header>
      <div className="grid grid-cols-6 gap-4 mx-5">
        {pokemonData.map((pokemon) => (
          <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
            <div className="flex-row text-center border-2 rounded-md">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
              <p className="text-sm mt-2">{pokemon.korean_name}</p>
              <p className="text-sm">도감번호: {pokemon.id} </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PokemonList;
