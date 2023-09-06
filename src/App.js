import logo from "./logo.svg";
import "./App.css";
import NovaIdade from "./components/NovaIdade";
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import Load from "./components/Load";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await fetch(API + "/todos")
      .then((rec) => rec.json())
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    setTodos(res);
  };

  useEffect(() => {
    loadData();
  }, []);

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
    loadData();
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
        {<Load todos={todos} loading={loading}></Load>}
        {todos.map((t) => (
          <div className="todo" key={t.id}>
            <p>{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
