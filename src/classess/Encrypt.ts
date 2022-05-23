import crypto from "crypto";

export class Encrypt {
  /**
   * ECDH curve sent from HIUI
   */
  private curve: string = "curve25519";
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
  private hipNounce!: any;
  /**
   * geberated from dhpkU and dhskP
   */
  private sharedKey!: string;

  private sender!: crypto.ECDH;

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
    this.sender = crypto.createECDH(curve);
    this.sender.generateKeys();
    this.dhskP = this.sender.getPrivateKey().toString("base64");
    this.dhpkP = this.sender.getPublicKey().toString("base64");
  }
  /**
   * generate session key
   */
  private getSharedKey() {
    const _dhpkU = this.dhpkU;
    const _dhskP = this.dhskP;
    // // Generating the shared key using the parameters available
    this.sharedKey = this.sender.computeSecret(this.dhpkU, "base64", "hex");
  }

  public encrypt(message: string) {
    const cipler = crypto.createCipheriv(
      "aes-256-gcm",
      Buffer.from(this.sharedKey, "hex"),
      this.hiuNounce
    );
    let encrypt = cipler.update(message, "utf-8", "hex");
    encrypt = cipler.final("hex");
    const authTag = cipler.getAuthTag().toString("hex");
    const ret = {
      encrypt: encrypt,
      authTag: authTag,
    };
  }
}
