import { useState } from 'react';
import './Calculator.css'
function Calculator(){

    let [result , setResult] = useState('');
    const checkInput = (text)=>{
        if(text == '×') return '*' 
        if(text == '÷') return '/'
        return text
    }
    const clickHandler = (e)=>{
        let input = checkInput(e.target.innerText)
        if(input == '.' && result.includes('.')) return
        setResult(result + input);        
        
    }
    const clearHandler = ()=>{
        setResult('')
    }
    const deleteHandler = ()=>{
        setResult(result.slice(0,-1))
    }
    const equalHandler = ()=>{
        setResult(String(eval(result)))
    }
    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearHandler} className='twoCol secColor'>Clear</button>
                <button onClick={deleteHandler} className='secColor'>C</button>
                <button onClick={clickHandler} className='secColor'>÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className='secColor'>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='secColor'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className='secColor'>+</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler}>00</button>
                <button onClick={clickHandler}>.</button>
                <button onClick={equalHandler} className=' secColor'>=</button>
            </div>
        </div>
    )
}
export default Calculator