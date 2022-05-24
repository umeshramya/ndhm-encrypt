import crypto from "crypto";
const EC = require("elliptic").ec;

export class Encrypt {
  /**
   * ECDH curve sent from HIUI
   */
  private readonly curve: string = "curve25519";
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
     * public key of HIU
     */
    dhpkU: string;
    /**
     * Random string of HIU
     */
    hiuNounce: string;
  }) {
    this.hiuNounce = options.hiuNounce;
    this.dhpkU = options.dhpkU;
  }

  private generateHIPKeys() {
    const ec = new EC(this.curve);
    const keys = ec.genKeyPair();
    this.sharedKey = keys.derive(keys.getPublic());
    console.log(this.sharedKey.toString());
    // this.sender.generateKeys();
    this.dhskP = keys.getPrivate().toString();
    this.dhpkP = keys.getPublic().toString();
    this.sender.setPrivateKey(this.dhpkP, "base64");
    // this.sender.computeSecret(this.dhpkU, "base64", "hex");
  }

  public async encrypt(message: string) {
    this.generateHIPKeys();
    return;
    const cipler = crypto.createCipheriv(
      "aes-256-gcm",
      Buffer.from(this.sharedKey, "hex"),
      // this.sharedKey,
      this.hiuNounce
    );
    let encrypt = cipler.update(message, "utf-8", "hex");
    encrypt = cipler.final("hex");
    const authTag = cipler.getAuthTag().toString("hex");
    const ret = {
      encrypt: encrypt,
      authTag: authTag,
      sharedKey: this.sharedKey,
    };
  }
}
