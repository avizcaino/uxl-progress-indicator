import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerTemplate = (props) => html`
${props.active == true
    ? html `<div id="progress-container" class$="${props.position}" fit$="${props.fit}">
        ${props.type == 'progress'
            ? html `<paper-progress indeterminate></paper-progress>`
            : html `<paper-spinner-lite active></paper-spinner-lite>`}
        ${props.text
            ? html `<div class="progress-title">${props.text}</div>`
            : ''}
        </div>`
    : html `<div id="progress-slot">
                <slot></slot>
            </div>`}`;
export const template: (props: any) =>TemplateResult = innerTemplate;