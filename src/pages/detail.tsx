import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from '../stores/rootReducer';
import { fetchApi } from '../stores/modules/PokeModules';

const Detail: React.FC = () => {
  // const { list } = useSelector((state: RootState) => state.pokeModules);
  // const dispatch = useDispatch();

  // dispatch(fetchApi());

  /**
   * slugと同名のポケモンデータを取得する
   */

  return (
    <div>
      <h1>ポケモン詳細</h1>
      ここにreduxで管理するデータと渡ってきたnameと等しいポケモンのデータを表示する
      {/* {list.map((pokemon: any) => pokemon.id)} */}
    </div>
  );
};

export default Detail;
