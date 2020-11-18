import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "redux/todos/action"; // import redux-action buatan kita

function App() {
  const [newTodo, setNewTodo] = useState(""); // state local

  const dispatch = useDispatch();
  function save() {
    dispatch(todoAdded(newTodo, new Date())); // simpan data ke redux
    setNewTodo(""); // reset state local
  }

  const todos = useSelector((state) => state.todos); // ambil data dari redux

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={save}>Simpan</button> {/* simpan ke redux */}
      <br />
      {/* tampilkan data dari redux */}
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.content}
            <br />
            <small>Dibuat saat detik ke-{todo.createdAt.getSeconds()}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
