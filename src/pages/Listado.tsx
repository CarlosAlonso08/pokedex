import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getPokemon } from "../controller/getPokemon";
import { pokemon } from "../models/Pokemon.m";
import Figure from "react-bootstrap/Figure";

const Listado = () => {
  const [pokemonList, setPokemonList] = React.useState<pokemon[]>([]);
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    const catchEmAll = async () => {
      const pokemonList = await getPokemon();
      setPokemonList(pokemonList);
    };
    catchEmAll();
  }, []);

  const filterPokemon = pokemonList?.slice(0,649).filter((pokemon =>{
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  }));

  return (
    <>
      <h1>Pokedex</h1>
      <header>
        <input type="text" value={query} placeholder="Buscar pokamion" onChange={
            (e) => setQuery(e.target.value.trim())} />
      </header>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {filterPokemon?.slice(0, 649).map((Pokemon) => (
              <Card
                className="mx-auto"
                style={{ width: "18rem", backgroundColor: "lightgray" }}
                key={Pokemon.id}
              >
                <Card.Header>
                  Tipo: {Pokemon.type1} / {Pokemon.type2}
                </Card.Header>
                <Card.Img
                  className="d-block mx-auto w-50"
                  width="100%"
                  height="100%"
                  variant="top"
                  src={Pokemon.imggif}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {Pokemon.name} : {Pokemon.id}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/11878/11878008.png"
                      />
                      <b>Puntos de salud: {Pokemon.hp}</b>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/4419/4419256.png"
                      />
                      <b>Ataque: {Pokemon.attack}</b>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/8473/8473989.png"
                      />
                      <b>Defensa: {Pokemon.defense}</b>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/3426/3426196.png"
                      />
                      <b>Ataque especial: {Pokemon.specialAttack}</b>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/1866/1866922.png"
                      />
                      <b>Defensa especial: {Pokemon.specialDefense}</b>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "lightgray" }}>
                      <Figure.Image
                        width={30}
                        height={30}
                        src="https://cdn-icons-png.flaticon.com/128/9151/9151183.png"
                      />
                      <b>Velocidad: {Pokemon.speed}</b>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
