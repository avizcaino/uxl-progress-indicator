import { html, LitElement, unsafeCSS, css, property, customElement } from 'lit-element';
import styles from './styles.scss';
import { template } from './template';
import { UxlProgressIndicatorOptions, defaultOptions } from '../../utilities';
/**
 * `uxl-progress-indicator`
 * A progress indicator component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement('uxl-progress-indicator')
export class UxlProgressIndicator extends LitElement {
  render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  @property()
  options: UxlProgressIndicatorOptions = defaultOptions;
}
