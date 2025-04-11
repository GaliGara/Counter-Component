import { LitElement, css, html } from 'lit'


export class CounterComponent extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
    `
  }


  static get styles() {
    return css`
    `
  }
}

window.customElements.define('counter-component', CounterComponent)
