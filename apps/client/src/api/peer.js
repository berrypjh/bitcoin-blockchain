import api from './axios';

export const getPeers = () => api.get('/peers').then((res) => res.data.peer);
export const getMyP2PPort = () => api.get('/p2pPort').then((res) => res.data.port);
export const addPeer = (port) =>
  api.post('/addPeers', { peer: [`ws://localhost:${port}`] }).then((res) => res.data.peer);
