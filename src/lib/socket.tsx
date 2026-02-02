import { io, Socket } from 'socket.io-client';

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL || 'https://api.leads.edtechinformative.uk';

const socket: Socket = io(SOCKET_URL, {
  autoConnect: false, // ⛔ important: we connect manually
  transports: ['websocket'],
  withCredentials: true,
});

export default socket;
