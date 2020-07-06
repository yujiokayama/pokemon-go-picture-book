import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Detail from '../pages/detail';

interface Props {}

interface State {
  pokemonList: object[];
}

class PictureBook extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      pokemonList: []
    };
  }

  componentDidMount() {
    axios
      .get('./assets/pokedex.json')
      .then((response) => {
        this.setState({
          pokemonList: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * タイプを日本語に変換する
   */
  typeReplaceJa(type: string[]): string {
    const types = type.join(',');
    return types
      .replace(/Normal/, 'ノーマル')
      .replace(/Fire/, 'ほのお')
      .replace(/Water/, 'みず')
      .replace(/Electric/, 'でんき')
      .replace(/Grass/, 'くさ')
      .replace(/Ice/, 'こおり')
      .replace(/Fighting/, 'かくとう')
      .replace(/Poison/, 'どく')
      .replace(/Ground/, 'じめん')
      .replace(/Flying/, 'ひこう')
      .replace(/Psychic/, 'エスパー')
      .replace(/Bug/, 'むし')
      .replace(/Rock/, 'いわ')
      .replace(/Ghost/, 'ゴースト')
      .replace(/Dragon/, 'ドラゴン')
      .replace(/Dark/, 'あく')
      .replace(/Steel/, 'はがね')
      .replace(/Fairy/, 'フェアリー');
  }

  /**
   * ゼロパディング
   */
  zeroPadding(num: number, length: number): string {
    return ('0000000000' + num).slice(-length);
  }

  render() {
    const { pokemonList } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:name" children={<Detail />} />
          </Switch>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>画像</th>
                <th>なまえ</th>
                <th>タイプ</th>
              </tr>
              {pokemonList.map((pokemon: any) => (
                <tr key={pokemon.id}>
                  <td>{pokemon.id}</td>
                  <td>
                    <Link to={`/detail/${pokemon.name.english}`}>
                      <img
                        src={`./assets/thumbnails/${this.zeroPadding(
                          pokemon.id,
                          3
                        )}.png`}
                        alt={pokemon.name.japanese}
                      />
                    </Link>
                  </td>
                  <td>{pokemon.name.japanese}</td>
                  <td>{this.typeReplaceJa(pokemon.type)}</td>
                </tr>
              ))}
            </thead>
          </table>
        </BrowserRouter>
      </div>
    );
  }
}

export default PictureBook;
