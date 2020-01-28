import React from 'react';
import Table from "./table.component";

const datas = [
  ['', 'K', 'F', 'E', 'J'],
  ['Bread', 'Jack Russell', 'Poodle', 'Streetdog', 'Cocker Spaniel'],
  ['Age', '16', '9', '10', '5'],
];

const HomeWork1 = () => {
  return (
    <>
      <Table datas={datas}/>
    </>
  )
};

export default HomeWork1;