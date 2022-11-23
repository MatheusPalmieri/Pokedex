import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

import pokeballHeader from "../../assets/image/pokeball.png";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import api from "../../service/api";

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { navigate } = useNavigation();

  const handleNavigation = (pokemonId: number) => {
    navigate("About", {
      pokemonId,
    });
  };

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payLoadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payLoadPokemons);
    }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return {
      id,
      types,
    };
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            key={pokemon.id}
            onPress={() => {
              handleNavigation(pokemon.id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
