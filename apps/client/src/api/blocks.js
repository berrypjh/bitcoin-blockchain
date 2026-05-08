import api from './client';

export const getBlocks = () => api.get('/blocks').then((res) => res.data);
export const mineBlock = () => api.post('/mineBlock').then((res) => res.data);
export const miningBlock = () => api.post('/miningBlock').then((res) => res.data);
export const getMinerAddress = (address) => api.get(`/address/${address}`).then((res) => res.data);
