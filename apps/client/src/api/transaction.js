import api from './axios';

export const getMyUnspentTransaction = () =>
  api.get('/myUnspentTransaction').then((res) => res.data);
export const getMyMempool = () => api.get('/myMempool').then((res) => res.data);
