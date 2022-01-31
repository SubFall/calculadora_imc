import  { useState } from 'react'
import './app.css'

export default function App() {
  let [peso, setPeso] = useState('')
  let [altura, setAltura] = useState('')
  let [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    let alt = altura / 100
    let imc = peso / (alt * alt)

    //alert(imc.toFixed(2))


    if(imc < 16){
      setMensagem(`Baixo peso muito grave! Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 16 && imc <= 16.99){
        setMensagem(`Baixo peso grave! Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 17 && imc <= 18.49){
        setMensagem(`Baixo peso! Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 18.50 && imc <= 24.99){
        setMensagem(`Peso normal, Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 25 && imc <= 29.99){
        setMensagem(`Sobrepeso! Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 30 && imc <= 34.99){
        setMensagem(`Obesidade grau I ! Seu IMC: ${imc.toFixed(2)}`)
      } else if(imc >= 35 && imc <= 39.99){
        setMensagem(`Obesidade grau II ! Seu IMC: ${imc.toFixed(2)}`)
      } else { //se não estiver enquadrado em nenhum critério acima, imc só pode ser maior que 40
        setMensagem(`Obesidade grau III ! Seu IMC: ${imc.toFixed(2)}`)
      }

      //alert(imc.toFixed(2))
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
      <input type="text" 
      placeholder="Peso em (KG) Ex: 50" 
      value={peso}
      onChange={ (e) => setPeso(e.target.value)}
      ></input>

      <input type="text" 
      placeholder="Altura em (CM) Ex: 180"
      value={altura}
      onChange={ (e) => setAltura(e.target.value)}
      ></input>

      <button onClick={calcularIMC}>
        Calcular
      </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
    
   
  )
}