import {html} from '@polymer/lit-element/lit-element';

const template = (props) => html`
${props.active
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
export default template;