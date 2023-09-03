import { useState } from "react";
import Condicional from './Condicional';

function NovaIdade() {

    const Idade = 18

    const [idadeAtual, setIdade] = useState(1)


   

    const novaIdade = () => {
        const x = idadeAtual + 1
        setIdade(x)
        
    }

  return (
    <div>
      <h1>Teste simples</h1>
      <h2>a sua idade é: {Idade}</h2>
      <button onClick={novaIdade}>Somar +1 na idade</button>
      <h2>Nova idade é: {idadeAtual}</h2>
      <Condicional x = { idadeAtual }></Condicional>
    </div>
  );
}
export default NovaIdade;
