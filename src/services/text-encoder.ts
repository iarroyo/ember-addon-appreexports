import Service from '@ember/service';
class TextEncoderService extends Service {
  async encodeText(str: string, algorithm = 'SHA-256') {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }
}

export { TextEncoderService, TextEncoderService as default };

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'text-encoder': TextEncoderService;
  }
}
