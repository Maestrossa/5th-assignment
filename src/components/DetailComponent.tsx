'use client';
import { Pokemon } from '@/types/pokemon';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface DetailComponentProps {
  id: string;
}

const fetchPokemonData = async (id: string): Promise<Pokemon> => {
  try {
    const response = await axios.get(`/api/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('데이터 로딩 실패');
  }
};
const DetailComponent: React.FC<DetailComponentProps> = ({ id }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    const getPokemoneData = async () => {
      try {
        const data = await fetchPokemonData(id);
        setPokemonData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemoneData();
  }, [id]);

  return (
    <div className="flex-row justify-center text-center h-[1000px] max-w-[700px] mx-auto gap-20">
      {pokemonData && (
        <>
          <h1 className="text-xl mt-5 font-bold">{pokemonData.korean_name}</h1>
          <h1>No.{pokemonData.id}</h1>

          <img className="mx-auto" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>
            <b>키:</b> {pokemonData.height} | <b>무게:</b> {pokemonData.weight}
          </p>
          <p>
            <b>타입</b>: {pokemonData.types.map((t) => `${t.type.korean_name}`).join(', ')}
          </p>
          <p>
            <b>능력:</b> {pokemonData.abilities.map((a) => `${a.ability.korean_name}`).join(', ')}
          </p>
          <p className="font-bold">기술:</p>
          <p className="mb-5">
            {pokemonData.moves.map((m) => `${m.move.korean_name}`).join(', ')}
            ...
          </p>
          <Link className="rounded-md border-2 p-1 bg-sky-400 text-white" href={'/'}>
            뒤로가기
          </Link>
        </>
      )}
    </div>
  );
};

export default DetailComponent;
