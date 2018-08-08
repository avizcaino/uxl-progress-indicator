import {property} from "@uxland/uxl-polymer2-ts";
import {html, LitElement} from '@polymer/lit-element/lit-element';
import '@polymer/paper-progress/paper-progress'
import '@polymer/paper-spinner/paper-spinner-lite'
import '@polymer/iron-flex-layout/iron-flex-layout'
import {ProgressPosition, ProgressType} from "./index";
import styleTemplate from './uxl-progress-indicator-styles.js';
import htmlTemplate from './uxl-progress-indicator-template.js';

/**
 * `uxl-progress-indicator`
 * A progress indicator component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class UxlProgressIndicator extends LitElement {
    @property()
    type: ProgressType = 'spinner';

    @property()
    text: string;

    @property()
    active: boolean;

    @property()
    position: ProgressPosition = 'vertical';

    @property()
    fit: boolean;

    _render(props: UxlProgressIndicator): any{
        return html`${styleTemplate} ${htmlTemplate(props)}`;
    }
}

window.customElements.define('uxl-progress-indicator', UxlProgressIndicator);
