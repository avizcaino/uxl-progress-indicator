import { html, LitElement, customElement, css, unsafeCSS } from 'lit-element';
import styles from './styles.scss';
import { template } from './template';

@customElement('demo-component')
export class DemoComponent extends LitElement {
  render() {
    return html`
      ${template()}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
