'use strict'

const protons = require('protons')

const message = `
message Envelope {
  // public_key is the public key of the keypair the enclosed payload was
  // signed with.
  bytes public_key = 1;

  // payload_type encodes the type of payload, so that it can be deserialized
  // deterministically.
  bytes payload_type = 2;

  // payload is the actual payload carried inside this envelope.
  bytes payload = 3;

  // signature is the signature produced by the private key corresponding to
  // the enclosed public key, over the payload, prefixing a domain string for
  // additional security.
  bytes signature = 5;
}
`

module.exports = protons(message).Envelope
