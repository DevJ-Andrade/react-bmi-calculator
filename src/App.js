import {useState} from 'react'
import './App.css'
export default function App(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    /* Parte responsavel de manipular a mensagem */
    const [mensagem, setMensagem] = useState (''); 
    function calcular(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);
       if(imc < 18.6){
        setMensagem("You are underweight! Your BMI is: " + imc.toFixed(2))
       } else if (imc >= 18.6 && imc < 24.9) {
        setMensagem("Ideal weight! Your BMI is: " + imc.toFixed(2))
       } else if (imc >= 24.9 && imc < 34.9){
        setMensagem("You are a little overweight! Your BMI is: " + imc.toFixed(2))
       } else if (imc > 34.9) {
        setMensagem("ALERT! Obesity! Your BMI is: " + imc.toFixed(2))
       }
    }
     /* to fixed(2) arrendonda para duas casas decimais */
    return(
        <div className="app">
            <h1>BMI Calculator</h1>
        <span>Let's calculate your IMC</span>
        <div className="area-input">
            <input
            type="text" placeholder="Weight in (kg) Ex:90" value={peso} onChange={(e) => setPeso(e.target.value)}
            />
            <input 
            type="text" placeholder="Height in (cm) Ex: 170" value={altura} onChange={(e) => setAltura(e.target.value)}
            />
        <button onClick={calcular}> Calculate </button>
        </div>
        <h2>{mensagem}</h2>
        </div>
    )
}
