import { createMachine } from 'xstate';

export const formMachine = createMachine({
  id: 'multistepForm',
  initial: 'step1',
  states: {
    step1: {
      on: {
        NEXT: 'step2',
        GOTO: {
          target: 'step2',
        },
      },
    },
    step2: {
      on: {
        NEXT: 'step3',
        PREV: 'step1',
        GOTO: {
          target: 'step1',
        },
      },
    },
    step3: {
      on: {
        PREV: 'step2',
        SUBMIT: 'submitted',
        GOTO: {
          target: 'step2',
        },
      },
    },
    submitted: {
      type: 'final',
    },
  },
});

