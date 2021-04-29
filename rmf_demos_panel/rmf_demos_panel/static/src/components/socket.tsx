import io from 'socket.io-client';

const ENDPOINT = "https://" + location.hostname + ":6600/status_updates"

export const socket = io.connect(ENDPOINT);
