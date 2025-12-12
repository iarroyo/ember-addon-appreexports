import { modifier } from 'ember-modifier';

const _autofocus = (element: HTMLElement) => {
  element.focus();
};

const autofocus = modifier(_autofocus);

export { autofocus, autofocus as default };
