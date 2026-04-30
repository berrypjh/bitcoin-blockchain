import api from './axios';

export const getPeers = () => api.get('/peers').then((res) => res.data.peer);
export const addPeer = (port) =>
  api.post('/addPeers', { peer: [`ws://localhost:${port}`] }).then((res) => res.data.peer);
