import crypto from "crypto";

export class Encrypt {
  private curve!: string;
  private hiuPublicKey!: string;
  private hiuNounce!: string;

  private hipPrivateKey!: string;
  private hipPublicKey!: string;
  private hipNounce!: string;

  constructor(options: {
    curve: string;
    hiupUblicKey: string;
    hiuNounce: string;
  }) {
    this.curve = options.curve;
    this.hiuNounce = options.hiuNounce;
    this.hiuPublicKey = options.hiupUblicKey;
  }

  async generateKeys(curve: string) {
    const ecdh = crypto.createECDH(curve);
    ecdh.generateKeys();
    this.hipPrivateKey = ecdh.getPublicKey().toString("base64");
    this.hipPublicKey = ecdh.getPublicKey().toString("base64");
  }
}
