// Crea una aplicación con dos botones. Un botón incrementa el contador y el otro lo decrementa
// Muestra el resultado en un elemento <h1>
// Solo puedes usar una propiedad y dos metodos

import { LitElement, html, css } from "lit";

export class counterComponent extends LitElement {
  static get properties() {
    return {
      counter: { type : Number},
    }
    
  }
  
  static get styles(){
    return css `
  :host {
    display: block;
    max-width: 300px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* Hereda el fondo y el texto global */
    background-color: inherit;
    color: inherit;
    font-family: inherit;

    text-align: center;
    transition: background-color 0.3s, color 0.3s;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  button {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  button:active {
    transform: scale(0.98);
  }
`;
  }

  constructor() {
    super();
    this.counter = 0;
  }

  increment() {
    this.counter++
    console.log('increment', this.counter)
  }

  decrement() {
    this.counter--
    console.log('decrement', this.counter)
  }

  render() {
    return html `
    
      <h1>Counter = ${this.counter}<h1>
      <button @click="${this.increment}"> + </button>
      <button @click="${this.decrement}"> - </button>
    `
  }
}
customElements.define("counter-component", counterComponent);