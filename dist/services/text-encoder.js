import Service from '@ember/service';

class TextEncoderService extends Service {
  async encodeText(str, algorithm = 'SHA-256') {
    console.log('text econder service from addon');
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.

export { TextEncoderService, TextEncoderService as default };
//# sourceMappingURL=text-encoder.js.map
