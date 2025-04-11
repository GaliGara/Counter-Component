// Crea una aplicación con dos botones. Un botón incrementa el contador y el otro lo decrementa
// Muestra el resultado en un elemento <h1>
// Solo puedes usar una propiedad y dos metodos

import { LitElement, html } from "lit";

export class counterComponent extends LitElement {
  static get properties() {
    return {
      counter: { type : Number},
    }
    
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