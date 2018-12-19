import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerStyle = html`
    <style>
        :host{
            --uxl-progress-indicator-color: #009688;
            --uxl-progress-indicator-stroke: 2px;
            --uxl-progress-indicator-width: 8vh;
            --uxl-progress-indicator-heigth: 8vh;
            --uxl-progress-indicator-background-color: white;
            --uxl-progress-indicator-title-color: #424242;
            --uxl-progress-indicator-title-size: 1rem;
             --uxl-busy-indicator-title: {
              font-family: 'Roboto', 'Noto', sans-serif;
              font-size: 1rem;
              font-weight: normal;
              color: #424242;
              line-height: normal;
              text-transform: none;
            };
        }                        
        
         #progress-container{
             background-color: var(--uxl-progress-indicator-background-color);
             display: flex;
             align-items: center;
             justify-content: center;
             box-sizing: border-box;
             z-index: 500;
             height: 100%;
         }
        
          paper-spinner-lite{
              --paper-spinner-color: var(--uxl-progress-indicator-color);
              --paper-spinner-stroke-width: var(--uxl-progress-indicator-stroke);
              width: var(--uxl-progress-indicator-width);
              height: var( --uxl-progress-indicator-heigth);
          }    
        
          paper-progress{
              --paper-progress-active-color: var(--uxl-progress-indicator-color);
              --paper-progress-height: var(--uxl-progress-indicator-stroke);
              margin: auto;
          }
          
          #progress-container.vertical{
                display: flex;
                flex-direction: column;
          }
    
          #progress-container.vertical-reverse{
                display: flex;
                flex-direction: column-reverse;
          }
    
          #progress-container.horizontal{
                display: flex;
                flex-direction: row;
          }
    
          #progress-container.horizontal-reverse{
                display: flex;
                flex-direction: row-reverse;
          }
          
          #progress-container.fit{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                margin: 0;
                height: 100vh;
                box-sizing: border-box;
          }
          
          .progress-title{
                font-family: 'Roboto', 'Noto', sans-serif;
                  font-size: 1rem;
                  font-weight: normal;
                  color: #424242;
                  line-height: normal;
                  text-transform: none;
                color: var(--uxl-progress-indicator-title-color);
                font-size: var(--uxl-progress-indicator-title-size);
                margin: 1rem;
          }
    </style>`;
export const style: TemplateResult = innerStyle;
