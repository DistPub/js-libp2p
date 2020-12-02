export function handleStop({ connection, request, streamHandler }: {
    connection: Connection;
    request: any;
    streamHandler: import("./stream-handler");
}): Promise<MuxedStream> | void;
export function stop({ connection, request }: {
    connection: Connection;
    request: any;
}): Promise<MuxedStream | void>;
export type Connection = import("libp2p-interfaces/src/connection/connection");
export type MuxedStream = import("libp2p-interfaces/src/stream-muxer/types").MuxedStream;
//# sourceMappingURL=stop.d.ts.map