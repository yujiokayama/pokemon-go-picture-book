import React from 'react';
import '../styles/App.css';

interface Props {}

interface State {
  list: any;
}

class PokemonList extends React.Component<Props, State> {


  constructor(props: any) {
    super(props);
    this.state = {
      list: null
    };
  }

  componentDidMount() {
    this.getCSV().then((data) => {
      this.setState({
        list: data
      });
    });
  }

  /**
   * CSVデータをJSONに変換して取得する
   */
  async getCSV() {
    const fetchData = await fetch('./assets/csv/pokemon_picture_book.csv');
    const textData = await fetchData.text();
    const jsonData = () => {
      let arr: any = [];
      let str = textData;
      let tmp = str.split('\n');
      for (let i = 0; i < tmp.length; ++i) {
        arr[i] = tmp[i].split(',');
      }
      return tmp;
    };
    return this.csv2json(jsonData());
  }

  /**
   * 配列をJSONに変換する
   */
  csv2json(csv: any): any {
    let jsonArray = [];
    let items = csv[0].split(',');
    for (let i = 1; i < csv.length - 1; i++) {
      let a_line: any = {};
      let csletrayD = csv[i].split(',');

      for (let j = 0; j < items.length; j++) {
        a_line[items[j]] = csletrayD[j];
      }
      jsonArray.push(a_line);
    }
    return jsonArray;
  }

  render() {
    return (
      <div>
        {this.state.list}
        {/* <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
        <h1 className="logo-main">ポケモンリスト</h1>
      </div>
    );
  }
}

export default PokemonList;
