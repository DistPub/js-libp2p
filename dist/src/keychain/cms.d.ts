export = CMS;
/**
 * Cryptographic Message Syntax (aka PKCS #7)
 *
 * CMS describes an encapsulation syntax for data protection. It
 * is used to digitally sign, digest, authenticate, or encrypt
 * arbitrary message content.
 *
 * See RFC 5652 for all the details.
 */
declare class CMS {
    /**
     * Creates a new instance with a keychain
     *
     * @param {Keychain} keychain - the available keys
     */
    constructor(keychain: any);
    keychain: any;
    /**
     * Creates some protected data.
     *
     * The output Uint8Array contains the PKCS #7 message in DER.
     *
     * @param {string} name - The local key name.
     * @param {Uint8Array} plain - The data to encrypt.
     * @returns {undefined}
     */
    encrypt(name: string, plain: Uint8Array): undefined;
    /**
     * Reads some protected data.
     *
     * The keychain must contain one of the keys used to encrypt the data.  If none of the keys
     * exists, an Error is returned with the property 'missingKeys'.  It is array of key ids.
     *
     * @param {Uint8Array} cmsData - The CMS encrypted data to decrypt.
     * @returns {undefined}
     */
    decrypt(cmsData: Uint8Array): undefined;
}
//# sourceMappingURL=cms.d.ts.map