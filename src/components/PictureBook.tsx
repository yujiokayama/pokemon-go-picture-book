import React from "react";
import axios from "axios";
import PokemonList from "./PokemonList";

interface Props {}

interface State {
  dataList: object[];
}

class PictureBook extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  componentDidMount() {
    axios
      .get("./assets/pokedex.json")
      .then((response) => {
        this.setState({
          dataList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * タイプをチェックする
   */
  typeReplaceJa(type: string[]): string {
    const typesJA: any = {
      Normal: "ノーマル",
      Fire: "ほのお",
      Water: "みず",
      Electric: "でんき",
      Grass: "くさ",
      Ice: "こおり",
      Fighting: "かくとう",
      Poison: "どく",
      Ground: "じめん",
      Flying: "ひこう",
      Psychic: "エスパー",
      Bug: "むし",
      Rock: "いわ",
      Ghost: "ゴースト",
      Dragon: "ドラゴン",
      Dark: "あく",
      Steel: "はがね",
      Fairy: "フェアリー",
    };
    
    const typeSt = type.join(",");

    Object.entries(typesJA).forEach((v) =>{
      const keys = new RegExp(v[0])
      const values: any = v[1]
      typeSt.replace(keys, values)
    })
    

    return typeSt
  }

  render() {
    const { dataList } = this.state;

    const Pokemon = ({ id, name, type, base }: any) => (
      <div>
        <dl>
          <dt>ID</dt>
          <dd>{id}</dd>
          <dt>なまえ</dt>
          <dd>{name.japanese}</dd>
          <dt>タイプ</dt>
          <dd>{this.typeReplaceJa(type)}</dd>
        </dl>
      </div>
    );

    return (
      <div>
        {dataList.map((pokemon: any) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
          />
        ))}
      </div>
    );
  }
}

export default PictureBook;
