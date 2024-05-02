import { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState("");
  const [toDoes, setToDoes] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoes([...toDoes, { text: data, completed: false }]);
    setData("");
  };

  const handleRemove = (index) => {
    const newToDoes = [...toDoes];
    newToDoes.splice(index, 1);
    setToDoes(newToDoes);
  };

  const handleToggle = (index) => {
    const newToDoes = [...toDoes];
    newToDoes[index].completed = !newToDoes[index].completed;
    setToDoes(newToDoes);
  };

  return (
    <>
      <div>TodoList</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data} name="todo" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {toDoes.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(index)}
            />
            <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              {item.text}
            </span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
