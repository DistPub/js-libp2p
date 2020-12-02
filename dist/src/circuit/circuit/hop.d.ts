export type Connection = import("libp2p-interfaces/src/connection/connection");
export type HopRequest = {
    connection: Connection;
    request: any;
    streamHandler: any;
    circuit: import('../transport');
};
/**
 * @typedef {import('libp2p-interfaces/src/connection').Connection} Connection
 */
/**
 * @typedef {Object} HopRequest
 * @property {Connection} connection
 * @property {any} request
 * @property {any} streamHandler
 * @property {import('../transport')} circuit
 */
/**
 * @param {HopRequest} options
 * @returns {Promise<void>}
 */
export function handleHop({ connection, request, streamHandler, circuit }: HopRequest): Promise<void>;
/**
 * Performs a HOP request to a relay peer, to request a connection to another
 * peer. A new, virtual, connection will be created between the two via the relay.
 *
 * @param {object} options
 * @param {Connection} options.connection - Connection to the relay
 * @param {CircuitPB} options.request
 * @returns {Promise<Connection>}
 */
export function hop({ connection, request }: {
    connection: Connection;
    request: any;
}): Promise<Connection>;
/**
 * Performs a CAN_HOP request to a relay peer, in order to understand its capabilities.
 *
 * @param {object} options
 * @param {Connection} options.connection - Connection to the relay
 * @returns {Promise<boolean>}
 */
export function canHop({ connection }: {
    connection: Connection;
}): Promise<boolean>;
/**
 * Creates an unencoded CAN_HOP response based on the Circuits configuration
 *
 * @param {Object} options
 * @param {Connection} options.connection
 * @param {StreamHandler} options.streamHandler
 * @param {import('../transport')} options.circuit
 * @private
 */
export function handleCanHop({ connection, streamHandler, circuit }: {
    connection: Connection;
    streamHandler: import("./stream-handler");
    circuit: import('../transport');
}): void;
//# sourceMappingURL=hop.d.ts.map