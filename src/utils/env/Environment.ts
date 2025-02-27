export class Environment {
  baseUrlApi: string;
  baseBackendUrl: string;
  basePatch: string;
  // baseUrlFront: string
  // socket: { io: string; room: string }

  constructor() {
    this.baseUrlApi = 'http://localhost:3002/';
    this.baseBackendUrl = 'http://localhost:3002/';
    this.basePatch = 'http://localhost:3002/';
    // this.baseUrlApi = import.meta.env.VITE_API_URL;
    // this.baseBackendUrl = import.meta.env.VITE_BACKEND_URL;
    // this.basePatch = import.meta.env.VITE_STATIC_PATCH;
    // this.baseBackendUrl = import.meta.env.VITE_BACKEND_URL;
    // this.baseUrlFront = import.meta.env.VITE_FRONT_URL;
    // this.socket = {
    //   // io: 'http://localhost:3001',
    //   io: import.meta.env.VITE_API_WEBSOCKET_URL,
    //   // room: 'turns-2024-04-10',
    //   room: import.meta.env.VITE_WEBSOCKET_ROOM,
    // };
  }
}
