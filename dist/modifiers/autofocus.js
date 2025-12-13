import { modifier } from 'ember-modifier';

const _autofocus = element => {
  console.log('autofocus from addon');
  element.focus();
};
const autofocus = modifier(_autofocus);

export { autofocus, autofocus as default };
//# sourceMappingURL=autofocus.js.map
