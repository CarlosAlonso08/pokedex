import { pokemon } from "../models/Pokemon.m";

export async function getPokemon(): Promise<pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json#"
  );
  const data = await response.json();
  const pokemons = data.results.map((pokemon: any) => ({
    id: pokemon.national_number,
    name: pokemon.name,
    imggif: FixName(pokemon.sprites["animated"]),
    imglarge: pokemon.sprites["large"],
    imgnormal: pokemon.sprites["normal"],
    total: pokemon.total,
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    specialAttack: pokemon.sp_atk,
    specialDefense: pokemon.sp_def,
    speed: pokemon.speed,
    type1: pokemon.type[0],
    type2: pokemon.type[1],
  }));
  const repeatedPokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );
  return repeatedPokemons;
}

export function FixName(name: string): string {
    if(name.includes("farfetch'd")){
        return name.replace("farfetch'd", "farfetchd");
    }else if(name.includes("mr.-mime")){
        return name.replace("mr.-mime", "mr-mime");
    }else if(name.includes("nidoran♀")){
        return name.replace("nidoran♀", "nidoran-f");
    }else if(name.includes("nidoran♂")){
        return name.replace("nidoran♂", "nidoran-m");
    }else if(name.includes("mime-jr.")){
        return name.replace("mime-jr.", "mime-jr");
    }else{
        return name;
    }
}
