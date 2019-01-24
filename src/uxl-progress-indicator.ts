import {property, customElement} from "lit-element/lib/decorators";
import {html, LitElement} from 'lit-element/lit-element';
import '@polymer/paper-progress/paper-progress';
import '@polymer/paper-spinner/paper-spinner-lite';
import {style as styleTemplate} from './uxl-progress-indicator-styles.js';
import {template as htmlTemplate} from './uxl-progress-indicator-template.js';

export type ProgressType = 'spinner' | 'progress';
export type ProgressPosition = 'vertical' | 'vertical-reverse' | 'horizontal' | 'horizontal-reverse';
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
    @property()
    type: ProgressType = 'spinner';

    @property()
    text: string;

    @property()
    active: boolean = true;

    @property()
    position: ProgressPosition = 'vertical';

    @property()
    fit: boolean;

    render(){
        return html`${styleTemplate} ${htmlTemplate(this)}`;
    }
}
