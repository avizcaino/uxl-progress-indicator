import { html } from 'lit-element';
import '../../src/components/uxl-progress-indicator/uxl-progress-indicator';
import { UxlProgressIndicatorOptions } from '../../src/utilities';

const options1: UxlProgressIndicatorOptions = { type: 'bouncing' };
const options2: UxlProgressIndicatorOptions = { type: 'bouncing', text: 'Im busy!', position: 'vertical' };
const options3: UxlProgressIndicatorOptions = { type: 'spinner' };
const options4: UxlProgressIndicatorOptions = { type: 'spinner', text: 'Hello, Im loading', position: 'vertical-reverse' };

export const template = () => html`
  <div class="container">
    <h3>Default</h3>
    <uxl-progress-indicator></uxl-progress-indicator>
    <h3>Bouncing</h3>
    <uxl-progress-indicator .options="${options1}"></uxl-progress-indicator>
    <h3>Bouncing with text</h3>
    <uxl-progress-indicator .options="${options2}"></uxl-progress-indicator>
    <h3>Spinner</h3>
    <uxl-progress-indicator .options="${options3}"></uxl-progress-indicator>
    <h3>Spinner reversed with text</h3>
    <uxl-progress-indicator .options="${options4}"></uxl-progress-indicator>
  </div>
`;
