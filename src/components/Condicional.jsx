import Img_6 from "../assests/img_test_6.png";
import Img_7 from "../assests/img_test_7.jpg";
import styles from "./Condicional.module.css";

function Cond(x) {
  return (
    <div>{x.x > 3 ? <img src={Img_6}></img> : <img src={Img_7}></img>}</div>
  );
}

export default Cond;
