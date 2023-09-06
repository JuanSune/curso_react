import logo from "./logo.svg";
import "./App.css";
import NovaIdade from "./components/NovaIdade";
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    });

    console.log(todo);

    setTitle("");
    setTime("");
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="todo-form">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que vai fazer?</label>

            <input
              type="text"
              name="title"
              placeholder="Titulo da Tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="time">Duraçao</label>

            <input
              type="number"
              name="title"
              placeholder="Tempo estimado em horas"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>

          <input type="submit" value="Criar tarefa" className="sub" />
        </form>
      </div>
      <div className="todo-list">
        <h2>Lista de Atividade</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
