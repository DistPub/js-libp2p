export = StreamHandler;
declare class StreamHandler {
    /**
     * Create a stream handler for connection
     *
     * @class
     * @param {object} options
     * @param {import('libp2p-interfaces/src/stream-muxer/types').MuxedStream} options.stream - A duplex iterable
     * @param {number} [options.maxLength = 4096] - max bytes length of message
     */
    constructor({ stream, maxLength }: {
        stream: import('libp2p-interfaces/src/stream-muxer/types').MuxedStream;
        maxLength: number | undefined;
    });
    stream: import("libp2p-interfaces/src/stream-muxer/types").MuxedStream;
    shake: any;
    decoder: AsyncGenerator<Buffer | import("bl"), import("bl"), unknown>;
    /**
     * Read and decode message
     *
     * @async
     * @returns {Promise<CircuitPB>}
     */
    read(): Promise<any>;
    /**
     * Encode and write array of buffers
     *
     * @param {CircuitPB} msg - An unencoded CircuitRelay protobuf message
     */
    write(msg: any): void;
    /**
     * Return the handshake rest stream and invalidate handler
     *
     * @returns {*} A duplex iterable
     */
    rest(): any;
    end(msg: any): void;
    /**
     * Close the stream
     *
     * @returns {void}
     */
    close(): void;
}
//# sourceMappingURL=stream-handler.d.ts.map