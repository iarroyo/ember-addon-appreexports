import Component from '@glimmer/component';
import { concat } from '@iarroyo/ember-addon-appreexports/helpers/concat';
import { autofocus } from '@iarroyo/ember-addon-appreexports/modifiers/autofocus';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import '@iarroyo/ember-addon-appreexports/services/text-encoder';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i, n } from 'decorator-transforms/runtime-esm';

class Hello extends Component {
  static {
    g(this.prototype, "textEncoder", [service]);
  }
  #textEncoder = (i(this, "textEncoder"), void 0);
  static {
    g(this.prototype, "encodedValue", [tracked], function () {
      return '';
    });
  }
  #encodedValue = (i(this, "encodedValue"), void 0);
  async encodeText(event) {
    if (!event.target) return;
    const input = event.target;
    if (!input.value) {
      this.encodedValue = '';
      return;
    }
    this.encodedValue = await this.textEncoder.encodeText(input.value);
  }
  static {
    n(this.prototype, "encodeText", [action]);
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div>{{concat \"hello \" \"world\"}}</div>\n    <label>Input:\n      <input {{autofocus}} {{on \"input\" this.encodeText}} type=\"text\" />\n    </label>\n    <div>{{this.encodedValue}}</div>\n  ", {
      strictMode: true,
      scope: () => ({
        concat,
        autofocus,
        on
      })
    }), this);
  }
}

export { Hello, Hello as default };
//# sourceMappingURL=hello.js.map
