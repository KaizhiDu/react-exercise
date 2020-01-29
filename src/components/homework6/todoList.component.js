import React from "react";

const ToDoList = ({lists}) => {

  const handleClick = (ids) => {
    lists.map((item, id) => {
      if (ids === id) item.status = 'complete';
    });
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    if (e.target.value !== '') {
      // lists.map(list => {
      //   if (list.status !== e.target.value) {
      //     console.log(list.value);
      //   }
      // });
    }
    // lists.filter(list => list.status !== e.target.value);
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value=''>all</option>
        <option value='active'>active</option>
        <option value='complete'>complete</option>
      </select>
      <ul>
        {lists.map((list, ids) => {
          return <li key={ids}>{list.value}
            <button onClick={() => handleClick(ids)}>{list.status}</button>
          </li>;
        })}
      </ul>
    </>
  );
};

export default ToDoList;