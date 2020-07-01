import React, { useState } from 'react';

const PokemonList: React.FC = () => {
  const [id] = useState(10);
  return (
    <div>
      <h1>ポケモンリスト</h1>
      {id}
    </div>
  );
};
export default PokemonList;
