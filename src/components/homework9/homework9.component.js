import React, { useState } from "react";

const Homework9 = () => {

  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setTags([...tags, value]);
    setValue('');
  };

  const handleDelete = (idx) => {
    setTags(tags.filter((tag, id) => idx !== id));
  };

  return (
    <div>
      <ur>
        {tags.map((tag, idx) => {
          return <li>{tag}
            <button onClick={() => handleDelete(idx)}>X</button>
          </li>;
        })}
      </ur>

      <input type='text' value={value} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Homework9;