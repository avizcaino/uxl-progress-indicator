export type ProgressType = 'spinner' | 'bouncing';
export type ProgressPosition = 'vertical' | 'vertical-reverse' | 'horizontal' | 'horizontal-reverse';
export interface UxlProgressIndicatorOptions {
  type?: ProgressType;
  position?: ProgressPosition;
  fit?: boolean;
  text?: string;
}

export const defaultOptions: UxlProgressIndicatorOptions = {
  type: 'spinner',
  position: 'vertical',
  fit: false
};
