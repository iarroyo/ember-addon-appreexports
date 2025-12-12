import { buildRegistry } from 'ember-strict-application-resolver/build-registry';

export const addonRegistry = buildRegistry({
  ...import.meta.glob('./components/**/*.gts', { eager: true }),
  ...import.meta.glob('./modifiers/**/*', { eager: true }),
  ...import.meta.glob('./services/**/*', { eager: true }),
});
