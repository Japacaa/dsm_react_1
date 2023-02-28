import Resultado from "./Resultado";
import {useState} from 'react';

function Calculadora(){

    const suma=(a,b) => a+b
    const resta = (a,b) => a-b
    const multiplicacion = (a,b) => a*b
    const division = (a,b) => a/b

    const [a, setA]= useState(0)
    const [b, setB]= useState(0)
    const [operacion, setOperacion]= useState(()=>suma)
    const [estilo, setEstilo]=useState(['#4CAF50','','',''])

    const clickHandler = (event,op,estilo) =>{
        event.preventDefault();
        setOperacion(()=>op);
        setEstilo(estilo)
    }
    const handleChangea = (event) =>{
        setA(Number(event.target.value))
        
    }
    const handleChangeb = (event) =>{
        setB(Number(event.target.value))
    }

    return(
        <div>
            <form>
                <label>A</label>
                <input type='number' onChange={handleChangea}/>
                <label>B</label>
                <input type='number' onChange={handleChangeb}/>
            </form>
            <button onClick={(event) => clickHandler(event,suma,['#4CAF50','','',''])} style={{'backgroundColor':estilo[0]}}>+</button>
            <button onClick={(event) => clickHandler(event,resta,['','#4CAF50','',''])} style={{'backgroundColor':estilo[1]}}>-</button>
            <button onClick={(event) => clickHandler(event,multiplicacion,['','','#4CAF50',''])} style={{'backgroundColor':estilo[2]}}>*</button>
            <button onClick={(event) => clickHandler(event,division,['','','','#4CAF50'])} style={{'backgroundColor':estilo[3]}}>/</button>
            <Resultado resultado={operacion(a,b).toFixed(2).toString()}/>
        </div>

    )
}
export default Calculadora;