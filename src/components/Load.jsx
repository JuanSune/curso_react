import styles from "./Load.module.css";

function Load({ todos, loading }) {
  let vr = "";
  if (todos.length === 0 || todos.length < 0) {
    vr = "Nao a atividades na lista";
  } else if (todos.length > 0 && loading === true) {
    vr = "Carregando atividades da lista";
  }

  return <p> {vr}</p>;
}
export default Load;
