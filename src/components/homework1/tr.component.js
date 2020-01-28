import React from 'react';
import Td from "./td.component";

const Tr = ({datas}) => {
  return (
    <tr>
      {datas.map(data => {
        return <Td value={data}/>
      })}
    </tr>
  );
};

export default Tr;