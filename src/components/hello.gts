import Component from '@glimmer/component';
import { concat } from '@iarroyo/ember-addon-appreexports/helpers/concat';
import { autofocus } from '@iarroyo/ember-addon-appreexports/modifiers/autofocus';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { TextEncoderService } from '@iarroyo/ember-addon-appreexports/services/text-encoder';

class Hello extends Component {
  @service
  declare textEncoder: TextEncoderService;
  @tracked encodedValue = '';

  @action
  async encodeText(event: Event) {
    if (!event.target) return;

    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.encodedValue = '';
      return;
    }
    this.encodedValue = await this.textEncoder.encodeText(input.value);
  }

  <template>
    <div>{{concat "hello " "world"}}</div>
    <label>Input:
      <input {{autofocus}} {{on "input" this.encodeText}} type="text" />
    </label>
    <div>{{this.encodedValue}}</div>
  </template>
}
export { Hello, Hello as default };
