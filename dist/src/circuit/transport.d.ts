declare const _exports: Circuit;
export = _exports;
export type Multiaddr = import("multiaddr");
export type Connection = import("libp2p-interfaces/src/connection/connection");
/**
 * @typedef {import('multiaddr')} Multiaddr
 * @typedef {import('libp2p-interfaces/src/connection').Connection} Connection
 */
declare class Circuit {
    /**
     * Creates an instance of the Circuit Transport.
     *
     * @class
     * @param {object} options
     * @param {import('../')} options.libp2p
     * @param {import('../upgrader')} options.upgrader
     */
    constructor({ libp2p, upgrader }: {
        libp2p: import('../');
        upgrader: import('../upgrader');
    });
    _dialer: import("../dialer");
    _registrar: import("../registrar");
    _connectionManager: import("../connection-manager");
    _upgrader: import("../upgrader");
    _options: any;
    _libp2p: import("..");
    peerId: import("peer-id");
    _onProtocol({ connection, stream }: {
        connection: any;
        stream: any;
    }): Promise<void>;
    /**
     * Dial a peer over a relay
     *
     * @param {Multiaddr} ma - the multiaddr of the peer to dial
     * @param {Object} options - dial options
     * @param {AbortSignal} [options.signal] - An optional abort signal
     * @returns {Promise<Connection>} - the connection
     */
    dial(ma: Multiaddr, options: {
        signal: AbortSignal | undefined;
    }): Promise<Connection>;
    /**
     * Create a listener
     *
     * @param {any} options
     * @param {Function} handler
     * @returns {import('libp2p-interfaces/src/transport/types').Listener}
     */
    createListener(options: any, handler: Function): import('libp2p-interfaces/src/transport/types').Listener;
    handler: Function | undefined;
    /**
     * Filter check for all Multiaddrs that this transport can dial on
     *
     * @param {Multiaddr[]} multiaddrs
     * @returns {Multiaddr[]}
     */
    filter(multiaddrs: Multiaddr[]): Multiaddr[];
}
//# sourceMappingURL=transport.d.ts.map