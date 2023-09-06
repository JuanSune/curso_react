import styles from "./Load.module.css";

function Load({ todos, loading }) {
  let objRe = "";

  if (loading === true){
    objRe = 'Estamos carregando as informaçoes'

  }
  else{
    objRe = todos
  }

  

  return <p> {objRe}</p>;
}
export default Load;
