import React from 'react';
import '../styles/App.css';

interface Props {}

interface State {
  dataList: any;
}

class PokemonList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  componentDidMount() {
    this.getCSV().then((data) => {
      this.setState({
        dataList: data
      });
    });
  }

  /**
   * CSVデータを配列に変換する
   */
  async getCSV(): Promise<any> {
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

    const dataKyes = jsonData()[0].split(',');
    const dataValues = jsonData().slice(1);

    const notTypesArray = dataValues.filter((v => {
      console.log(v.match(this.typeCheck()))
    }))

    console.log(dataValues)

    return textData;
  }

  /**
   * タイプをチェックする
   */
  typeCheck() {
    const types =
      'ノーマル,ほのお,みず,でんき,くさ,こおり,かくとう,どく,じめん,ひこう,エスパー,むし,いわ,ゴースト,ドラゴン,あく,はがね,フェアリー';
    return new RegExp(types.split(',').join('|'), 'g');
  }

  /**
   * オブジェクトに変換する
   */
  csv2json(arr: any): any {
    let jsonArray = [];
    let items = arr[0].split(',');
    for (let i = 1; i < arr.length - 1; i++) {
      let a_line: any = {};
      let csletrayD = arr[i].split(',');

      for (let j = 0; j < items.length; j++) {
        a_line[items[j]] = csletrayD[j];
      }
      jsonArray.push(a_line);
    }
    return jsonArray;
  }

  render() {
    const { dataList } = this.state;

    return (
      <div>
        {/* <ul>
          {dataList.map((item: any) => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
        <h1 className="logo-main">ポケモンリスト</h1>
      </div>
    );
  }
}

export default PokemonList;
