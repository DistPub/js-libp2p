export = Dialer;
/**
 * @typedef {import('libp2p-interfaces/src/connection').Connection} Connection
 * @typedef {import('multiaddr')} Multiaddr
 * @typedef {import('peer-id')} PeerId
 * @typedef {import('../peer-store')} PeerStore
 * @typedef {import('../peer-store/address-book').Address} Address
 * @typedef {import('../transport-manager')} TransportManager
 */
/**
 * @typedef {Object} DialerProperties
 * @property {PeerStore} peerStore
 * @property {TransportManager} transportManager
 *
 * @typedef {Object} DialerOptions
 * @param {(addresses: Address[]) => Address[]} [options.addressSorter = publicAddressesFirst] - Sort the known addresses of a peer before trying to dial.
 * @property {number} [concurrency = MAX_PARALLEL_DIALS] - Number of max concurrent dials.
 * @property {number} [perPeerLimit = MAX_PER_PEER_DIALS] - Number of max concurrent dials per peer.
 * @property {number} [timeout = DIAL_TIMEOUT] - How long a dial attempt is allowed to take.
 * @property {Object} [resolvers = {}] - multiaddr resolvers to use when dialing
 *
 * @typedef DialTarget
 * @property {string} id
 * @property {Multiaddr[]} addrs
 *
 * @typedef PendingDial
 * @property {DialRequest} dialRequest
 * @property {TimeoutController} controller
 * @property {Promise} promise
 * @property {function():void} destroy
 */
declare class Dialer {
    /**
     * @class
     * @param {DialerProperties & DialerOptions} options
     */
    constructor({ transportManager, peerStore, addressSorter, concurrency, timeout, perPeerLimit, resolvers }: DialerProperties & DialerOptions);
    transportManager: any;
    peerStore: any;
    addressSorter: any;
    concurrency: any;
    timeout: any;
    perPeerLimit: any;
    tokens: number[];
    _pendingDials: Map<any, any>;
    /**
     * Clears any pending dials
     */
    destroy(): void;
    /**
     * Connects to a given `peer` by dialing all of its known addresses.
     * The dial to the first address that is successfully able to upgrade a connection
     * will be used.
     *
     * @param {PeerId|Multiaddr|string} peer - The peer to dial
     * @param {object} [options]
     * @param {AbortSignal} [options.signal] - An AbortController signal
     * @returns {Promise<Connection>}
     */
    connectToPeer(peer: PeerId | Multiaddr | string, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<Connection>;
    /**
     * Creates a DialTarget. The DialTarget is used to create and track
     * the DialRequest to a given peer.
     * If a multiaddr is received it should be the first address attempted.
     *
     * @private
     * @param {PeerId|Multiaddr|string} peer - A PeerId or Multiaddr
     * @returns {Promise<DialTarget>}
     */
    private _createDialTarget;
    /**
     * Creates a PendingDial that wraps the underlying DialRequest
     *
     * @private
     * @param {DialTarget} dialTarget
     * @param {object} [options]
     * @param {AbortSignal} [options.signal] - An AbortController signal
     * @returns {PendingDial}
     */
    private _createPendingDial;
    getTokens(num: any): number[];
    releaseToken(token: any): void;
    /**
     * Resolve multiaddr recursively.
     *
     * @param {Multiaddr} ma
     * @returns {Promise<Multiaddr[]>}
     */
    _resolve(ma: Multiaddr): Promise<Multiaddr[]>;
    /**
     * Resolve a given multiaddr. If this fails, an empty array will be returned
     *
     * @param {Multiaddr} ma
     * @returns {Promise<Multiaddr[]>}
     */
    _resolveRecord(ma: Multiaddr): Promise<Multiaddr[]>;
}
declare namespace Dialer {
    export { Connection, Multiaddr, PeerId, PeerStore, Address, TransportManager, DialerProperties, DialerOptions, DialTarget, PendingDial };
}
type PeerId = import("peer-id");
type Multiaddr = import("multiaddr");
type Connection = import("libp2p-interfaces/src/connection/connection");
type DialerProperties = {
    peerStore: PeerStore;
    transportManager: TransportManager;
};
type DialerOptions = any;
type PeerStore = import("../peer-store");
type Address = {
    /**
     * peer multiaddr.
     */
    multiaddr: import("multiaddr");
    /**
     * obtained from a signed peer record.
     */
    isCertified: boolean;
};
type TransportManager = import("../transport-manager");
type DialTarget = {
    id: string;
    addrs: Multiaddr[];
};
type PendingDial = {
    dialRequest: import("./dial-request");
    controller: any;
    promise: Promise<any>;
    destroy: () => void;
};
//# sourceMappingURL=index.d.ts.map