export const SUBMIT = 'submit';
export const DONE = 'done';
export const LOADING = 'loading';
export const ERROR = 'error';

type LoadStatus = typeof SUBMIT | typeof DONE | typeof LOADING | typeof ERROR;

export default LoadStatus;
