// import React, { useEffect, useState } from "react";
// import ToDoList from "./todoList.component";
//
// const Homework6 = () => {
//
//   const [toDoList, setToDoList] = useState([]);
//   const [value, setValue] = useState('');
//
//   const handleValueChange = (e) => {
//     setValue(e.target.value);
//   };
//
//   const handleSubmit = () => {
//     setToDoList([...toDoList, {
//       value: value,
//       status: 'active'
//     }]);
//     setValue('');
//   };
//
//   return (
//     <>
//       <input type='text' onChange={handleValueChange} value={value}/>
//       <button onClick={handleSubmit}>Add</button>
//       <br/>
//       <ToDoList lists={toDoList}/>
//     </>
//   );
// };
//
// export default Homework6;
import React, { useEffect, useState } from "react";
import ToDoList from "./todoList.component";

const Homework6 = () => {

  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setToDoList([...toDoList, {
      value: value,
      status: 'active'
    }]);
    setValue('');
  };

  const handleClick = (ids) => {
    toDoList.map((item, id) => {
      if (ids === id) item.status = 'complete';
    });
    setToDoList(toDoList);
  };

  const handleSelectChange = (e) => {
    if (e.target.value !== '') {
      setToDoList(toDoList.filter(todo=> todo.status === e.target.value))
    }
  };

  return (
    <>
      <input type='text' onChange={handleValueChange} value={value}/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <>
        <select onChange={handleSelectChange}>
          <option value=''>all</option>
          <option value='active'>active</option>
          <option value='complete'>complete</option>
        </select>
        <ul>
          {toDoList.map((list, ids) => {
            return <li key={ids}>{list.value}
              <button onClick={() => handleClick(ids)}>{list.status}</button>
            </li>;
          })}
        </ul>
      </>
    </>
  );
};

export default Homework6;