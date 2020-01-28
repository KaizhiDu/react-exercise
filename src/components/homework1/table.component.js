import React from 'react';
import Tr from "./tr.component";

const Table = ({datas}) => {
  return (
    <table>
      {datas.map(row => {
        return <Tr datas={row}/>
      })}
    </table>
  );
};

export default Table;