import api from './client';

export const getAddress = () => api.get('/address').then((res) => res.data);
export const getBalance = () => api.get('/balance').then((res) => res.data.balance);
export const addTransaction = (data) => api.post('/addtransactions', data).then((res) => res.data);
export const getMempool = () => api.get('/transactionPool').then((res) => res.data);
