import React from 'react';
import { useParams } from 'react-router-dom';

const Detail: React.FC = () => {
  let { name } = useParams();
  return (
    <div>
      <h1>ポケモン詳細</h1>
      <p>name: {name}</p>
      ここにreduxで管理するデータと渡ってきたnameと等しいポケモンのデータを表示する
    </div>
  );
};

export default Detail;
