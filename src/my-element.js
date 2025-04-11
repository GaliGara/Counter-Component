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
    return css`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
      margin: 2rem auto;
      padding: 2rem;
      text-align: center;
      background-color: inherit;
      color: inherit;
      font-family: inherit;
    }
  
    h1 {
      font-size: 21rem;
      line-height: 1;
      margin: 0;
    }
  
    .button-container {
      margin-top: 2rem;
    }
  
    button {
      font-size: 2rem;
      padding: 1rem 2rem;
      margin: 0 1rem;
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
    
      <h1>${this.counter}<h1>
      <div class="button-container">
        <button @click="${this.decrement}">-</button>
        <button @click="${this.increment}">+</button>
      </div>
    `
  }
}
customElements.define("counter-component", counterComponent);