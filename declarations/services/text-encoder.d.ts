import Service from '@ember/service';
declare class TextEncoderService extends Service {
    encodeText(str: string, algorithm?: string): Promise<string>;
}
export { TextEncoderService, TextEncoderService as default };
declare module '@ember/service' {
    interface Registry {
        'text-encoder': TextEncoderService;
    }
}
//# sourceMappingURL=text-encoder.d.ts.map