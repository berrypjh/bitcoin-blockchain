import { createStore } from 'redux';

const store = createStore((state = {}) => state);
const persister = 'Free';

export { store, persister };
