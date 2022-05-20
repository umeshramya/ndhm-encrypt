import crypto from "crypto";

export class Encrypt {
  /**
   * ECDH curve sent from HIUI
   */
  private curve!: string;
  /**
   * public key of HIU
   */
  private dhpkU!: string;
  /**
   * Nounc or random string of HIU
   */
  private hiuNounce!: string;

  /**
   * public key of HIP
   */
  private dhskP!: string;
  /**
   * shared key of HIP
   */
  private dhpkP!: string;
  /**
   * Random or nounce of HIP
   */
  private hipNounce!: string;
  /**
   * geberated from dhpkU and dhskP
   */
  private sessionKey!: string;
  constructor(options: {
    /**
     * curve mentoned from HIU
     */
    curve: string;
    /**
     * public key of HIU
     */
    dhpkU: string;
    /**
     * Random string of HIU
     */
    hiuNounce: string;
  }) {
    this.curve = options.curve;
    this.hiuNounce = options.hiuNounce;
    this.dhpkU = options.dhpkU;
  }

  /**
   *
   * @param curve sent from HIU
   */
  async generateHIPKeys(curve: string) {
    const ecdh = crypto.createECDH(curve);
    ecdh.generateKeys();
    this.dhskP = ecdh.getPrivateKey().toString("base64");
    this.dhpkP = ecdh.getPublicKey().toString("base64");
  }
  /**
   * generate session key
   */
  private getSessionKey() {
    const _dhpkU = this.dhpkU;
    const _dhskP = this.dhskP;
    this.sessionKey=crypto.
  }
}
