export type LoadStatusValue = 'loading' | 'done' | 'error';

type LoadStatusType = {
  LOADING: LoadStatusValue;
  ERROR: LoadStatusValue;
  DONE: LoadStatusValue;
};
const LoadStatus: LoadStatusType = {
  LOADING: 'loading',
  ERROR: 'error',
  DONE: 'done',
};

export default LoadStatus;
