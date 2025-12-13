import Component from '@glimmer/component';
import { TextEncoderService } from '@iarroyo/ember-addon-appreexports/services/text-encoder';
declare class Hello extends Component {
    textEncoder: TextEncoderService;
    encodedValue: string;
    encodeText(event: Event): Promise<void>;
}
export { Hello, Hello as default };
//# sourceMappingURL=hello.d.ts.map