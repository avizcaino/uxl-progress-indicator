import { html } from 'lit-element';
import { UxlProgressIndicator } from './uxl-progress-indicator';
import { ProgressType } from '../../utilities';

const getBusyTemplate = (type: ProgressType) => {
  switch (type) {
    case 'bouncing':
      return bouncingTemplate();
    case 'spinner':
      return spinnerTemplate();
  }
};

export const template = (props: UxlProgressIndicator) => html`
  <div id="progress-container" class="${props.options.position} ${props.options.fit ? 'fit' : ''}">
    ${getBusyTemplate(props.options.type)}
    <div ?hidden="${!props.options.text}" class="progress-title">${props.options.text}</div>
  </div>
`;

const bouncingTemplate = () => html`
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

const spinnerTemplate = () =>
  html`
    <div class="spinner"></div>
  `;
